import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {Dispatch} from 'redux';
import * as Yup from 'yup';

import {Button, FormControl} from '~/components';
import {UiLayout} from '~/layouts';
import {signInAction} from '~/store/User/actions';

import type {ApiSignInRequest} from '~/api/types';
import type {FormControlFields, FormFields} from '~/components/FormControl/types';

const AuthorizationSchema = Yup.object().shape({
    login: Yup.string().required('field is required').max(12, 'max length 12 symbols'),
    password: Yup.string().min(4, 'min length 4 symbols').max(16, 'max length 16 symbols').required('field is required')
});

const authorizationField: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Login',
        title: 'Your login: ',
        autocomplete: 'username'
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        title: 'Your password: ',
        autocomplete: 'current-password'
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAuth: (formData: FormFields) => {
        const userData: ApiSignInRequest = {
            login: formData.login,
            password: formData.password
        };

        dispatch(signInAction(userData));
    }
});

const connecter = connect(null, mapDispatchToProps);

export const AuthorizationPage = connecter(
    ({onAuth}: ConnectedProps<typeof connecter>): JSX.Element => (
        <UiLayout isBlock>
            <h1 className="t-title">Authorization</h1>
            <FormControl schema={AuthorizationSchema} fields={authorizationField} onSubmit={onAuth}>
                <footer className="button-bar mt-5">
                    <Link to="/registration">
                        <Button className="btn btn_txt">Registration</Button>
                    </Link>
                    <Button type="submit">Enter</Button>
                </footer>
            </FormControl>
        </UiLayout>
    )
);
