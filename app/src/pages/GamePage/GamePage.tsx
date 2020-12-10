import React, {useRef} from 'react';
import {GameUi} from './GameUi/GameUi';
import {setBgCanvas} from '~/core/bg.canvas';
import {setMainCanvas} from '~/core/main.canvas';
import {UiLayout} from '~/layouts';
import './GamePage.scss';

const width = 1024;
const height = 768;

export const GamePage = (): JSX.Element => {
    const bgCanvas = useRef<HTMLCanvasElement>();
    const mainCanvas = useRef<HTMLCanvasElement>();
    React.useEffect(() => {
        setBgCanvas(bgCanvas.current);
        setMainCanvas(mainCanvas.current);
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
};
