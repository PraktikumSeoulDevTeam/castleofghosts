import shuffle from 'lodash/shuffle';
import {call, ForkEffect, put, select, takeEvery} from 'redux-saga/effects';

import {createGame, exitGame, loadLevel, pauseGame, play} from '~/core/engine';
import {LEVELS_COUNT, STATE} from '~/core/params';
import {audioControlSampleAction} from '~/store/Audio/actions';

import {gameSetLevelAction, gameSetLevelNumberAction, gameSetLevelsOrderAction, gameSetStateAction} from './actions';

import {GameSetStateAction, GAME_ACTION_TYPES} from './types';
import type {SampleControl} from '~/core/audio/types';
import type {Level} from '~/core/types';
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

function* gameSetStateWorker(action: GameSetStateAction) {
    switch (action.payload) {
        case STATE.INIT: {
            const levels: Level[] = yield select((state: AppStoreState) => state.levels.levels);
            if (levels.length) {
                let c = levels.length - 1;
                const shuffleArray = shuffle(Array.from({length: levels.length}, () => c--)).slice(0, LEVELS_COUNT);
                yield put(gameSetLevelsOrderAction(shuffleArray));
            }
            yield call(createGame);
            break;
        }
        case STATE.START: {
            yield put(gameSetStateAction(STATE.INTERLUDE));
            break;
        }
        case STATE.INTERLUDE: {
            const levels: Level[] = yield select((state: AppStoreState) => state.levels.levels);
            const levelsOrder: number[] = yield select((state: AppStoreState) => state.game.levelsOrder);
            const nextLevelNumber = levelsOrder.pop();
            if (nextLevelNumber !== undefined) {
                const level = levels[nextLevelNumber];
                yield put(gameSetLevelNumberAction(LEVELS_COUNT - levelsOrder.length));
                yield put(gameSetLevelAction(level));
                yield call(loadLevel, level);
            } else {
                yield put(gameSetStateAction(STATE.WIN));
            }
            yield put(gameSetLevelsOrderAction(levelsOrder));
            break;
        }
        case STATE.GAME: {
            yield call(play);
            yield put(audioControlSampleAction(gameLoopStart));
            break;
        }
        case STATE.PAUSE: {
            yield call(pauseGame);
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        case STATE.WIN: {
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        case STATE.LOOSE: {
            yield put(audioControlSampleAction(gameLoopStop));
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
