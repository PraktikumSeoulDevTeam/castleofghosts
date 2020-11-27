import React, {useCallback} from 'react';
import {compose, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

import {signInAction} from '../../store/User/actions';
import {UiLayout} from '../../layouts';
import {Button, FormControl} from '../../components';
import type {FormControlFields} from '../../components/FormControl/types';
import type {ApiSignInRequest} from '../../api/types';
import {withLoading, WithLoadingProps} from '../../hoc/withLoading';

const AuthorizationSchema = Yup.object().shape({
    login: Yup.string().required('field is required').max(12, 'max length 12 symbols'),
    password: Yup.string().min(4, 'min length 4 symbols').max(16, 'max length 16 symbols').required('field is required')
});

const authorizationField: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Login',
        title: 'Your login: '
    },
    password: {
        type: 'password',
        placeholder: 'Password',
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

function AuthorizationComponent({
    onAuth,
    setLoading
}: ConnectedProps<typeof connecter> & WithLoadingProps): JSX.Element {
    const onAuthMethod = useCallback((forMData) => {
        setLoading(true);
        onAuth(forMData);
    }, []);

    return (
        <UiLayout isBlock>
            <h1 className="t-title">Authorization</h1>
            <FormControl schema={AuthorizationSchema} fields={authorizationField} onSubmit={onAuthMethod}>
                <footer className="button-bar mt-5">
                    <Link to="/registration">
                        <Button className="btn btn_txt">Registration</Button>
                    </Link>
                    <Button type="submit">Enter</Button>
                </footer>
            </FormControl>
        </UiLayout>
    );
}

export const AuthorizationPage = compose(connecter, withLoading)(AuthorizationComponent);
