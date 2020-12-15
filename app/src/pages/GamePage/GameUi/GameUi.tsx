import React, {HTMLAttributes, useCallback, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Button} from '../../../components';
import {createPauseListener, createGameListener} from '../../../core/engine';
import {movef} from '../../../core/main.canvas';
import {gameSetStateAction} from '../../../store/Game/actions';
import {AppStoreState} from '../../../store/types';
import './GameUi.scss';

const mapState = (state: AppStoreState) => {
    return {
        character: state.game.character,
        levelName: state.game.level.name,
        levelNumber: state.game.level.number,
        state: state.game.state
    };
};

const mapDispatch = {
    setState: gameSetStateAction
};

const connector = connect(mapState, mapDispatch);

const component = (props: ConnectedProps<typeof connector> & HTMLAttributes<HTMLDivElement>): JSX.Element => {
    const {character, className, levelName, levelNumber, state, setState} = props;
    const play = useCallback(() => setState('GAME'), []);
    const exit = useCallback(() => setState('END'), []);
    const pause = useCallback(() => setState('PAUSE'), []);

    useEffect(() => {
        if (state === 'GAME') {
            return createGameListener(pause, movef);
        }
        if (state === 'PAUSE') {
            return createPauseListener(play);
        }

        return null;
    }, [state]);

    return state === 'OFF' ? (
        <Redirect to="/leaderboard" />
    ) : (
        <div className={`game-ui ${className}`}>
            <div className="game-ui__bar">
                <span className="pa-1">{character.name}</span>
                <span className="game-ui__lvl pa-1">{`${levelNumber} ${levelName}`}</span>
                <span className="pa-1">{character.points}</span>
            </div>
            {state === 'INTERLUDE' && (
                <div className="game-ui__dialog">
                    <h1 className="t-title">{`Level ${levelNumber}`}</h1>
                    <div className="button-bar button-bar_center mt-8">
                        <Button onClick={play}>Go</Button>
                    </div>
                </div>
            )}
            {state === 'PAUSE' && (
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
};

export const GameUi = connector(component);
