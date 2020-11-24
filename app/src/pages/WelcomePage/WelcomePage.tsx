import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Copyright} from '../../components';
import {UiLayout} from '../../layouts';
import './WelcomePage.scss';

export function WelcomePage(): JSX.Element {
    return (
        <UiLayout isBlock className="welcome-page">
            <div className="welcome-page__title-block">
                <h1 className="t-title">
                    <div>Castle</div>
                    <div>of</div>
                    <div>Ghosts</div>
                </h1>
                <Link to="/game" className="t-center mt-5">
                    <Button>Start</Button>
                </Link>
                <Link to="/leaderboard" className="t-center mt-5">
                    <span>Leaderboard</span>
                </Link>
            </div>
            <div>
                <Copyright />
            </div>
        </UiLayout>
    );
}
