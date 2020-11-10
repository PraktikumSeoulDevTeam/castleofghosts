import React from 'react';
import Button from '../Button';
import Copyright from '../Copyright';
import './WelcomePage.scss';

export default function WelcomePage(): JSX.Element {
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
                    <Button>Start</Button>
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
