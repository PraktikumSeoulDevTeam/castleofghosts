import React from 'react';
import Button from '../button';

export default function WelcomePage(): JSX.Element {
    return (
        <div className="ui">
            <div className="ui__inner">
                <div className="welcome--page__title t-title">
                    Castle
                    <br />
                    of
                    <br />
                    Ghosts
                </div>
                <div className="m--t__5" />
                <Button>Start</Button>
            </div>
        </div>
    );
}
