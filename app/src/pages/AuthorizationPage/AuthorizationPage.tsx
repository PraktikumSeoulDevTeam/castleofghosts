import React from 'react';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import {Button, FormControl} from '../../components';
import {FormControlFields} from '../../components/FormControl/types';
import {UiLayout} from '../../layouts';

const AuthorizationSchema = Yup.object().shape({
    login: Yup.string().required('field must be required').max(12, 'max length 12 symbols'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required')
});

const authorizationField: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'input your login',
        title: 'Your login: '
    },
    password: {
        type: 'password',
        placeholder: 'input your password',
        title: 'Your password: '
    }
};

export function AuthorizationPage(): JSX.Element {
    return (
        <UiLayout isBlock className="authentication">
            <h1 className="t-title">Authorization</h1>
            <FormControl
                schema={AuthorizationSchema}
                fields={authorizationField}
                onSubmit={(formData) => {
                    // eslint-disable-next-line no-console
                    console.log(formData);
                }}
            >
                <footer className="authentication__footer">
                    <Link to="/registration" className="mr-5">
                        <span>Registration</span>
                    </Link>
                    <Button className="btn t-main" type="submit">
                        <span>Enter</span>
                    </Button>
                </footer>
            </FormControl>
        </UiLayout>
    );
}
