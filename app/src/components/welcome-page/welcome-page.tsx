import React from 'react';
import Button from '../button';
import Copyright from '../copyright';

export default function WelcomePage(): JSX.Element {
    return (
        <div className="ui">
            <div className="ui__inner">
                <div className="ui__top" />
                <div className="ui__center">
                    <div className="welcome--page__title t-title">
                        Castle
                        <br />
                        of
                        <br />
                        Ghosts
                    </div>
                    <div className="m--t__5" />
                    <Button>Start</Button>
                    <div className="m--t__5" />
                    <div className="link">Leaderboard</div>
                </div>
                <div className="ui__bottom">
                    <Copyright />
                </div>
            </div>
        </div>
    );
}
