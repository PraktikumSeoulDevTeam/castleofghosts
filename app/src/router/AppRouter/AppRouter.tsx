import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from '../PrivateRoute/PrivateRoute';
import {ErrorPage, StartPage, GamePage, AuthorizationPage, RegistrationPage, EditPage, WelcomePage} from '../../pages';

/**
 * Роутер
 */
export function AppRouter(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <PrivateRoute publicExclusive path="/registration">
                    <RegistrationPage />
                </PrivateRoute>
                <PrivateRoute publicExclusive path="/login">
                    <AuthorizationPage />
                </PrivateRoute>
                <PrivateRoute path="/user">
                    <EditPage />
                </PrivateRoute>
                <PrivateRoute path="/start">
                    <StartPage />
                </PrivateRoute>
                <PrivateRoute path="/game">
                    <GamePage />
                </PrivateRoute>
                <Route path="*">
                    <ErrorPage type="404" />
                </Route>
            </Switch>
        </Router>
    );
}
