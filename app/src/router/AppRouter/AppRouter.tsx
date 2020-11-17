import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from '../PrivateRoute/PrivateRoute';
import {ErrorPage, GamePage, Authorization, Registration, WelcomePage} from '../../pages';

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
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <Authorization />
                </Route>
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
