import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import type {AppStoreState} from '../../store/types';

const mapState = (state: AppStoreState) => {
    return {
        isAuthenticated: !!state.user.info.id
    };
};

const connector = connect(mapState);

/**
 * Компонент защищенного роута. Перед переходом при необходимости перенаправляет на роут авторизации
 */
function component(params: RouteProps & ConnectedProps<typeof connector>): JSX.Element {
    const {children, isAuthenticated, ...rest} = params;

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export const PrivateRoute = connector(component);
