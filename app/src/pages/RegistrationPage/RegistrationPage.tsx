import 'yup-phone';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';

import {Button, FormControl} from '../../components';
import {FormControlFields} from '../../components/FormControl/types';

import {ApiSignUpRequest} from '../../api/types';
import {signUpAction} from '../../store/User/actions';

const RegistrationSchema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field must be required'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string().phone('*', false, 'phone number is not valid').required('field must be required'),
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

export function RegistrationPage(): JSX.Element {
    const dispatcher = useDispatch();
    const onRegistration = useCallback((formData) => {
        const userData: ApiSignUpRequest = {
            first_name: formData.firstName,
            second_name: formData.secondName,
            email: formData.email,
            login: formData.login,
            password: formData.password,
            phone: formData.phoneNumber
        };

        dispatcher(signUpAction(userData));
    }, []);

    return (
        <main className="ui">
            <div className="ui__inner authentication">
                <h1 className="t-title authentication__title">Registration</h1>

                <FormControl schema={RegistrationSchema} fields={registrationFields} onSubmit={onRegistration}>
                    <footer className="authentication__footer">
                        <Link to="/login" className="link mr-5">
                            Authorization
                        </Link>
                        <Button className="btn t-main" type="submit">
                            Register
                        </Button>
                    </footer>
                </FormControl>
            </div>
        </main>
    );
}
