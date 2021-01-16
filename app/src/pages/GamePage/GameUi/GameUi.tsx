import React, {HTMLAttributes, useCallback, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Button} from '~/components';
import {createPauseListener, createGameListener} from '~/core/engine';
import {STATE} from '~/core/params';
import {gameSetStateAction} from '~/store/Game/actions';

import type {AppStoreState} from '~/store/types';
import './GameUi.scss';

const mapState = (state: AppStoreState) => ({
    character: state.game.character,
    levelName: state.game.level.name,
    levelNumber: state.game.levelNumber,
    userPositionCity: state.user.geolocation.city,
    state: state.game.state
});

const mapDispatch = {
    setState: gameSetStateAction
};

const connector = connect(mapState, mapDispatch);

export const GameUi = connector(
    (props: ConnectedProps<typeof connector> & HTMLAttributes<HTMLDivElement>): JSX.Element => {
        const {character, className, levelName, levelNumber, userPositionCity, state, setState} = props;
        const play = useCallback(() => setState(STATE.GAME), []);
        const exit = useCallback(() => setState(STATE.END), []);
        const pause = useCallback(() => setState(STATE.PAUSE), []);

        useEffect(() => {
            if (state === STATE.GAME) {
                return createGameListener(pause);
            }
            if (state === STATE.PAUSE) {
                return createPauseListener(play);
            }

            return undefined;
        }, [state]);

        return state === STATE.END ? (
            <Redirect to="/leaderboard" />
        ) : (
            <div className={`game-ui ${className}`}>
                <div className="game-ui__bar">
                    <span className="pa-1">{character.name}</span>
                    <span className="game-ui__lvl pa-1">{`Level ${levelNumber} ${levelName || ''}`}</span>
                    <span className="pa-1">{character.points}</span>
                </div>
                {state === STATE.INTERLUDE && (
                    <div className="game-ui__dialog">
                        <h1 className="t-title">{`Level ${levelNumber}`}</h1>
                        {userPositionCity ? (
                            <div className="t-main t-center">{`Somewhere in ${userPositionCity}`}</div>
                        ) : null}
                        <div className="button-bar button-bar_center mt-8">
                            <Button onClick={play}>Go</Button>
                        </div>
                    </div>
                )}
                {state === STATE.PAUSE && (
                    <div className="game-ui__dialog">
                        <h1 className="t-title">Pause</h1>
                        <div className="button-bar button-bar_center mt-8">
                            <Button onClick={exit}>Exit</Button>
                            <Button onClick={play}>Continue</Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
);
