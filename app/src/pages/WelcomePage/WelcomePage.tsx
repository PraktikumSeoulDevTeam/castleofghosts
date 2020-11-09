import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Copyright} from '../../components';
import './WelcomePage.scss';

export function WelcomePage(): JSX.Element {
    return (
        <main className="ui">
            <div className="ui__inner">
                <div className="ui__top" />
                <div className="ui__center">
                    <h1 className="welcome-page__title t-title">
                        <span className="welcome-page__title__item">Castle</span>
                        <span className="welcome-page__title__item">of</span>
                        <span className="welcome-page__title__item">Ghosts</span>
                    </h1>
                    <div className="m--t__5" />
                    <Link to="/login">
                        <Button>Start</Button>
                    </Link>
                    <div className="m--t__5" />
                    <div className="link">Leaderboard</div>
                </div>
                <div className="ui__bottom">
                    <Copyright />
                </div>
            </div>
        </main>
    );
}
