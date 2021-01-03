import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
    ErrorPage,
    StartPage,
    GamePage,
    LeaderboardPage,
    AuthorizationPage,
    RegistrationPage,
    EditPage,
    WelcomePage,
    LevelGenerator
} from '~/pages';

import {PrivateRoute} from '../PrivateRoute/PrivateRoute';

export const AppRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/">
                <WelcomePage />
            </Route>
            <Route path="/generator">
                <LevelGenerator />
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
            <PrivateRoute path="/leaderboard">
                <LeaderboardPage />
            </PrivateRoute>
            <Route path="*">
                <ErrorPage type="404" />
            </Route>
        </Switch>
    </Router>
);
