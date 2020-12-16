import React, {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {gameRemoveAction} from '../../store/Game/actions';
import {GameUi} from './GameUi/GameUi';
import {setBgCanvas} from '~/core/bg.canvas';
import {setMainCanvas} from '~/core/main.canvas';
import {UiLayout} from '~/layouts';
import './GamePage.scss';

const width = 1024;
const height = 768;

const mapDispatch = {
    gameRemove: gameRemoveAction
};

const connector = connect(null, mapDispatch);

export const GamePage = connector(
    ({gameRemove}: ConnectedProps<typeof connector>): JSX.Element => {
        const bgCanvas = useRef<HTMLCanvasElement>();
        const mainCanvas = useRef<HTMLCanvasElement>();
        const history = useHistory();

        useEffect(() => {
            setBgCanvas(bgCanvas.current);
            setMainCanvas(mainCanvas.current);
            const unblock = history.block(() => {
                gameRemove();
            });

            return () => unblock();
        }, []);

        return (
            <UiLayout className="game-page">
                <div className="game-page__container" style={{width: width + 4, height: height + 50}}>
                    <canvas ref={bgCanvas} width={width} height={height} className="game-page__bg" />
                    <canvas ref={mainCanvas} width={width} height={height} className="game-page__main" />
                    <GameUi className="game-page__ui" />
                </div>
            </UiLayout>
        );
    }
);
