import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

import type {PrivateRouteProps} from './types';
import type {AppStoreState} from '~/store/types';

const mapState = (state: AppStoreState) => ({
    isAuthenticated: !!state.user.info.id
});

const connector = connect(mapState);

/**
 * Компонент защищенного роута. Перед переходом, при необходимости,
 * перенаправляет на корневой роут
 */
export const PrivateRoute = connector(
    (params: PrivateRouteProps & ConnectedProps<typeof connector>): JSX.Element => {
        const {children, publicExclusive, isAuthenticated, ...rest} = params;

        return (
            <Route
                {...rest}
                render={() =>
                    (isAuthenticated && !publicExclusive) || (!isAuthenticated && publicExclusive) ? (
                        children
                    ) : (
                        <Redirect to="/" />
                    )
                }
            />
        );
    }
);
