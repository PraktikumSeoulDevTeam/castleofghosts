import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Copyright} from '../../components';

export function WelcomePage(): JSX.Element {
    return (
        <main className="ui">
            <div className="ui__inner">
                <div className="ui__top" />
                <div className="ui__center">
                    <h1 className="t-title">
                        <div>Castle</div>
                        <div>of</div>
                        <div>Ghosts</div>
                    </h1>
                    <div className="mt-5" />
                    <Link to="/login">
                        <Button>Start</Button>
                    </Link>
                    <div className="mt-5" />
                    <div className="link">Leaderboard</div>
                </div>
                <div className="ui__bottom">
                    <Copyright />
                </div>
            </div>
        </main>
    );
}
