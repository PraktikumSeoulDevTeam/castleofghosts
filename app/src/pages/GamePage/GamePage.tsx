import React, {useEffect, useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {setBgCanvas} from '~/core/bg.canvas';
import {setMainCanvas} from '~/core/main.canvas';
import {HEIGHT, STATE, WIDTH} from '~/core/params';
import {setSpiritCanvas} from '~/core/spirit.canvas';
import {UiLayout} from '~/layouts';
import {gameRemoveAction, gameSetStateAction} from '~/store/Game/actions';
import {FullScreenApi} from '~/webApi/fullScreen';

import {GameUi} from './GameUi/GameUi';
import './GamePage.scss';

const mapDispatch = {
    gameRemove: gameRemoveAction,
    setState: gameSetStateAction
};

const connector = connect(null, mapDispatch);

export const GamePage = connector(
    ({gameRemove, setState}: ConnectedProps<typeof connector>): JSX.Element => {
        const bgCanvas = useRef<HTMLCanvasElement>(null);
        const mainCanvas = useRef<HTMLCanvasElement>(null);
        const spiritCanvas = useRef<HTMLCanvasElement>(null);
        const history = useHistory();

        useEffect(() => {
            Promise.all([
                setBgCanvas(bgCanvas.current),
                setMainCanvas(mainCanvas.current),
                setSpiritCanvas(spiritCanvas.current)
            ]).then(() => {
                setState(STATE.START);
            });
            const unblock = history.block(() => {
                gameRemove();
            });

            FullScreenApi.initFullScreenByButton();

            return () => {
                unblock();
                FullScreenApi.disableFullScreenByButton();
            };
        }, []);

        return (
            <UiLayout className="game-page">
                <div className="game-page__container" style={{width: WIDTH + 4, height: HEIGHT + 52}}>
                    <canvas ref={bgCanvas} width={WIDTH} height={HEIGHT} className="game-page__bg" />
                    <canvas ref={mainCanvas} width={WIDTH} height={HEIGHT} className="game-page__main" />
                    <canvas ref={spiritCanvas} width={WIDTH} height={HEIGHT} className="game-page__spirit" />
                    <GameUi className="game-page__ui" />
                </div>
            </UiLayout>
        );
    }
);
