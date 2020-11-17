import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {signInAction, signOutAction} from '../../store/User/actions';
import {Button} from '../button/Button';
import type {AppStoreState} from '../../store/types';
import type {AuthProps} from './types';

const mapState = (state: AppStoreState) => {
    return {
        isAuthenticated: !!state.user.info.id
    };
};

const mapDispatch = {
    signIn: signInAction,
    signOut: signOutAction
};

const connector = connect(mapState, mapDispatch);

/**
 * Кнопка для signin/signout в зависимости от контекста
 * @param props - параметры кнопки
 */
function component(props: AuthProps & ConnectedProps<typeof connector>): JSX.Element {
    const {data, isAuthenticated, signIn, signOut} = props;

    return isAuthenticated ? (
        <Button
            type="button"
            onClick={() => {
                signOut();
            }}
        >
            Выйти
        </Button>
    ) : (
        <Button
            type="button"
            onClick={() => {
                signIn(data);
            }}
        >
            Войти
        </Button>
    );
}

export const AuthButton = connector(component);
