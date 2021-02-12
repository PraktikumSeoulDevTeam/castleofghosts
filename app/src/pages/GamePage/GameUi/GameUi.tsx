import React, {HTMLAttributes, useCallback, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Button} from '~/components';
import {createPauseListener, createGameListener, registerStateChanges} from '~/core/engine';
import {LEVELS_COUNT, STATE} from '~/core/params';
import {gameSetStateAction} from '~/store/Game/actions';

import {Timer} from './Timer/Timer';

import type {AppStoreState} from '~/store/types';
import './GameUi.scss';

// TODO нужен Batch на обновление интерфейса, тк сейчас
const mapState = (state: AppStoreState) => ({
    character: state.game.character,
    levelNumber: state.game.levelNumber,
    city: state.user.geolocation.city,
    state: state.game.state
});

const mapDispatch = {
    setState: gameSetStateAction
};

const connector = connect(mapState, mapDispatch);

export const GameUi = connector(
    (props: ConnectedProps<typeof connector> & HTMLAttributes<HTMLDivElement>): JSX.Element => {
        const {character, className, levelNumber, city, state, setState} = props;
        const play = useCallback(() => setState(STATE.GAME), []);
        const exit = useCallback(() => setState(STATE.END), []);
        const pause = useCallback(() => setState(STATE.PAUSE), []);
        const onLoose = useCallback(() => setState(STATE.LOOSE), []);
        const onLevelEnd = useCallback(() => setState(STATE.LEVEL_END), []);
        const newGame = useCallback(() => {
            setState(STATE.INIT);
            setState(STATE.START);
        }, []);

        useEffect(() => {
            if (state === STATE.GAME) {
                return createGameListener(pause);
            }
            if (state === STATE.PAUSE) {
                return createPauseListener(play);
            }

            registerStateChanges(onLevelEnd, onLoose);

            return undefined;
        }, [state]);

        return state === STATE.END ? (
            <Redirect to="/leaderboard" />
        ) : (
            <div className={`game-ui ${className}`}>
                <div className="game-ui__bar">
                    <span className="pa-1">{character.name}</span>
                    <span className="game-ui__lvl pa-1">{`Level ${levelNumber}`}</span>
                    <span className="pa-1">
                        <Timer />
                    </span>
                </div>
                {state === STATE.LEVEL_START && (
                    <div className="game-ui__dialog">
                        <h1 className="t-title">
                            {`Level ${levelNumber}`}/{LEVELS_COUNT}
                        </h1>
                        {city && <div className="t-main t-center">{`Somewhere in ${city}`}</div>}
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
                {state === STATE.LOOSE && (
                    <div className="game-ui__dialog">
                        <h1 className="t-title">You loose</h1>
                        <div className="button-bar button-bar_center mt-8">
                            <Button onClick={exit}>Exit</Button>
                            <Button onClick={newGame}>Try again</Button>
                        </div>
                    </div>
                )}
                {state === STATE.WIN && (
                    <div className="game-ui__dialog">
                        <h1 className="t-title">You win!!!</h1>
                        <div className="t-main t-center">Time saved: {character.cogTime}</div>
                        <div className="button-bar button-bar_center mt-8">
                            <Button onClick={exit}>Continue</Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
);
