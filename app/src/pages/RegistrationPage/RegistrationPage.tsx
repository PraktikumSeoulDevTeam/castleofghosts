import React from 'react';
import {compose, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import {signUpAction} from '../../store/User/actions';
import {UiLayout} from '../../layouts';
import {Button, FormControl} from '../../components';
import {FORMAT} from '../../utils';
import type {FormControlFields} from '../../components/FormControl/types';
import type {ApiSignUpRequest} from '../../api/types';

const RegistrationSchema = Yup.object().shape({
    login: Yup.string().required('field is required').max(22, 'max length 22 symbols'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field is required'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string()
        .trim()
        .matches(...FORMAT.PHONE)
        .required('field is required'),
    firstName: Yup.string(),
    secondName: Yup.string()
});

const registrationFields: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Login',
        title: 'Create new login: '
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        title: 'Input your email: '
    },
    phoneNumber: {
        type: 'text',
        placeholder: 'Phone',
        title: 'Input your phone: '
    },
    firstName: {
        type: 'text',
        placeholder: 'First name',
        title: 'What is your first name: '
    },
    secondName: {
        type: 'text',
        placeholder: 'Second name',
        title: 'What is your second name: '
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        title: 'Create new password: '
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onRegistration: (formData: {[key: string]: string}): void => {
            const userData: ApiSignUpRequest = {
                first_name: formData.firstName,
                second_name: formData.secondName,
                email: formData.email,
                login: formData.login,
                password: formData.password,
                phone: formData.phoneNumber
            };

            dispatch(signUpAction(userData));
        }
    };
};

const connecter = connect(null, mapDispatchToProps);

function RegistrationComponent({onRegistration}: ConnectedProps<typeof connecter>): JSX.Element {
    return (
        <UiLayout isBlock>
            <h1 className="t-title">Registration</h1>
            <FormControl schema={RegistrationSchema} fields={registrationFields} onSubmit={onRegistration}>
                <footer className="button-bar mt-5">
                    <Link to="/login">
                        <Button className="btn btn_txt">Authorization</Button>
                    </Link>
                    <Button type="submit">Register</Button>
                </footer>
            </FormControl>
        </UiLayout>
    );
}

export const RegistrationPage = compose(connecter)(RegistrationComponent);
