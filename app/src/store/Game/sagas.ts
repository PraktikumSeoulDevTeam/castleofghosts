import shuffle from 'lodash/shuffle';
import {call, ForkEffect, put, select, takeEvery} from 'redux-saga/effects';

import {createGame, endLevel, exitGame, loadLevel, pauseGame, playGame} from '~/core/engine';
import {LEVELS_COUNT, STATE} from '~/core/params';
import {audioControlSampleAction} from '~/store/Audio/actions';
import {lbUploadAction} from '~/store/Leaderboard/actions';

import {gameCharSetTimeAction, gameSetLevelNumberAction, gameSetLevelsOrderAction, gameSetStateAction} from './actions';

import {GameSetStateAction, GAME_ACTION_TYPES} from './types';
import type {SampleControl} from '~/core/audio/types';
import type {GameCharacterInfo, Level} from '~/core/types';
import type {AppStoreState} from '~/store/types';

export function* gameWatcher(): Generator<ForkEffect<never>> {
    yield takeEvery(GAME_ACTION_TYPES.SET_STATE, gameSetStateWorker);
}

const gameLoopStart: SampleControl = {
    action: 'PLAY',
    sample: 'GAME_LOOP'
};

const gameLoopStop: SampleControl = {
    action: 'STOP',
    sample: 'GAME_LOOP'
};

const gameWin: SampleControl = {
    action: 'PLAY',
    sample: 'WIN'
};

const gameLoose: SampleControl = {
    action: 'PLAY',
    sample: 'LOOSE'
};

function* gameSetStateWorker(action: GameSetStateAction) {
    switch (action.payload) {
        case STATE.INIT: {
            const levels: Level[] = yield select((state: AppStoreState) => state.levels.levels);
            if (levels.length) {
                let c = levels.length - 1;
                const shuffleArray = shuffle(Array.from({length: levels.length}, () => c--)).slice(0, LEVELS_COUNT);
                yield put(gameSetLevelsOrderAction(shuffleArray));
            }
            yield put(gameCharSetTimeAction(0));
            yield call(createGame);
            break;
        }
        case STATE.START: {
            yield put(gameSetStateAction(STATE.LEVEL_START));
            break;
        }
        case STATE.LEVEL_START: {
            const levels: Level[] = yield select((state: AppStoreState) => state.levels.levels);
            const levelsOrder: number[] = yield select((state: AppStoreState) => state.game.levelsOrder);
            const nextLevelNumber = levelsOrder.pop();
            if (nextLevelNumber !== undefined) {
                const level = levels[nextLevelNumber];
                yield put(gameSetLevelNumberAction(LEVELS_COUNT - levelsOrder.length));
                yield call(loadLevel, level);
            } else {
                yield put(gameSetStateAction(STATE.LEVEL_END));
            }
            yield put(gameSetLevelsOrderAction(levelsOrder));
            break;
        }
        case STATE.GAME: {
            yield call(playGame);
            yield put(audioControlSampleAction(gameLoopStart));
            break;
        }
        case STATE.PAUSE: {
            yield call(pauseGame);
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        case STATE.LEVEL_END: {
            yield call(endLevel);
            yield put(audioControlSampleAction(gameLoopStop));
            const levelsOrder: number[] = yield select((state: AppStoreState) => state.game.levelsOrder);
            if (levelsOrder.length) {
                yield put(gameSetStateAction(STATE.LEVEL_START));
            } else {
                yield put(gameSetStateAction(STATE.WIN));
            }
            break;
        }
        case STATE.WIN: {
            yield call(pauseGame);
            yield put(audioControlSampleAction(gameLoopStop));
            yield put(audioControlSampleAction(gameWin));
            const character: GameCharacterInfo = yield select((state: AppStoreState) => state.game.character);
            yield put(lbUploadAction(character));
            break;
        }
        case STATE.LOOSE: {
            yield call(pauseGame);
            yield put(audioControlSampleAction(gameLoopStop));
            yield put(audioControlSampleAction(gameLoose));
            break;
        }
        case STATE.END: {
            yield call(exitGame);
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        default:
            // eslint-disable-next-line no-console
            yield console.log('[gameSetStateWorker warn] ', action.payload);
    }
}
