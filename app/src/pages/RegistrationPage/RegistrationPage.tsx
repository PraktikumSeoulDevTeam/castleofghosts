import React, {useCallback} from 'react';
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
import {withLoading, WithLoadingProps} from '../../hoc/withLoading';

const RegistrationSchema = Yup.object().shape({
    login: Yup.string().required('field must be required').max(22, 'max length 22 symbols'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string()
        .trim()
        .matches(...FORMAT.PHONE)
        .required('field must be required'),
    firstName: Yup.string(),
    secondName: Yup.string()
});

const registrationFields: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Input your login',
        title: 'Create new login: '
    },
    email: {
        type: 'email',
        placeholder: 'Input your email',
        title: 'Input your email: '
    },
    phoneNumber: {
        type: 'text',
        placeholder: 'Input your phone',
        title: 'Input your phone: '
    },
    firstName: {
        type: 'text',
        placeholder: 'Input your first name',
        title: 'What is your first name: '
    },
    secondName: {
        type: 'text',
        placeholder: 'Input your second name',
        title: 'What is your second name: '
    },
    password: {
        type: 'password',
        placeholder: 'Input your password',
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

function RegistrationComponent({
    onRegistration,
    setLoading
}: ConnectedProps<typeof connecter> & WithLoadingProps): JSX.Element {
    const onRegistrationMethod = useCallback((formData) => {
        setLoading(true);
        onRegistration(formData);
    }, []);

    return (
        <UiLayout isBlock className="authentication">
            <h1 className="t-title authentication__title">Registration</h1>
            <FormControl schema={RegistrationSchema} fields={registrationFields} onSubmit={onRegistrationMethod}>
                <footer className="authentication__footer">
                    <Link to="/login" className="mr-5">
                        Authorization
                    </Link>
                    <Button type="submit">Register</Button>
                </footer>
            </FormControl>
        </UiLayout>
    );
}

export const RegistrationPage = compose(connecter, withLoading)(RegistrationComponent);
