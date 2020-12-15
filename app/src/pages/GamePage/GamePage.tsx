import React, {useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {GameUi} from './GameUi/GameUi';
import {setBgCanvas} from '../../core/bg.canvas';
import {setMainCanvas} from '../../core/main.canvas';
import {UiLayout} from '../../layouts';
import {Level} from '../../store/Level/types';
import './GamePage.scss';
import {AppStoreState} from '../../store/types';

const width = 1024;
const height = 768;

/**
 * Selector
 * @param state
 */
const currentLevel = (state: AppStoreState): Level => state.level.levels[state.game.currentLevel];

const mapStateToProps = (state: AppStoreState) => {
    return {
        level: currentLevel(state)
    };
};

const connector = connect(mapStateToProps);

const GamePageComponent = ({level}: ConnectedProps<typeof connector>): JSX.Element => {
    const bgCanvas = useRef<HTMLCanvasElement>();
    const mainCanvas = useRef<HTMLCanvasElement>();

    React.useEffect(() => {
        setBgCanvas(bgCanvas.current, level.map);
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

export const GamePage = connector(GamePageComponent);
