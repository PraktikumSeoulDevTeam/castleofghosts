import React from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

import {signInAction} from '../../store/User/actions';
import {UiLayout} from '../../layouts';
import {Button, FormControl} from '../../components';
import type {FormControlFields} from '../../components/FormControl/types';
import type {ApiSignInRequest} from '../../api/types';

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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAuth: (formData: {[key: string]: string}) => {
            const userData: ApiSignInRequest = {
                login: formData.login,
                password: formData.password
            };

            dispatch(signInAction(userData));
        }
    };
};

const connecter = connect(null, mapDispatchToProps);

function AuthorizationComponent({onAuth}: ConnectedProps<typeof connecter>): JSX.Element {
    return (
        <UiLayout isBlock className="authentication">
            <h1 className="t-title authentication__title">Authorization</h1>
            <FormControl schema={AuthorizationSchema} fields={authorizationField} onSubmit={onAuth}>
                <footer className="authentication__footer">
                    <Link to="/registration" className="mr-5">
                        Registration
                    </Link>
                    <Button type="submit">Enter</Button>
                </footer>
            </FormControl>
        </UiLayout>
    );
}

export const AuthorizationPage = connecter(AuthorizationComponent);
