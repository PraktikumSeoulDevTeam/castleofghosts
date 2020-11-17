import React from 'react';
import * as Yup from 'yup';
import {Button} from '../../components/button';
import {FormControl} from '../../components/FormControl/FormControl';
import './Registration.scss';

const RegistrationSchema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(12, 'max length 12 symbols')
        .required('field must be required'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required'),
    phoneNumber: Yup.string()
        .min(8, 'min length 8 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required'),
    firstName: Yup.string(),
    secondName: Yup.string()
});

export function Registration(): JSX.Element {
    return (
        <main className="ui">
            <div className="ui__inner authentication">
                <h4 className="t-title authentication__title">
                    <span>Registration</span>
                </h4>
                <FormControl
                    schema={RegistrationSchema}
                    fields={{
                        login: {
                            type: 'text',
                            placeholder: 'Input your login',
                            title: 'Create new login: '
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
                    }}
                    onSubmit={(formData) => {
                        // eslint-disable-next-line no-console
                        console.log(formData);
                    }}
                >
                    <footer className="authentication__footer">
                        <div>Authorization</div>
                        <Button className="btn t-main registration-button" submit>
                            Register
                        </Button>
                    </footer>
                </FormControl>
            </div>
        </main>
    );
}
