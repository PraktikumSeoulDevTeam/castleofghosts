import {call, ForkEffect, put, takeEvery} from 'redux-saga/effects';
import {createGame, exitGame, loadLevel, pauseGame, play} from '../../core/engine';
import {GameSetStateAction, GAME_ACTION_TYPES} from './types';

export function* gameWatcher(): Generator<ForkEffect<never>> {
    yield takeEvery(GAME_ACTION_TYPES.SET_STATE, gameSetStateWorker);
}

function* gameSetStateWorker(action: GameSetStateAction) {
    switch (action.payload) {
        case 'START': {
            const nextAction = yield call(createGame);
            yield put(nextAction);
            break;
        }
        case 'INTERLUDE': {
            const nextAction = yield call(loadLevel);
            yield put(nextAction);
            break;
        }
        case 'GAME': {
            yield call(play);
            break;
        }
        case 'PAUSE': {
            yield call(pauseGame);
            break;
        }
        case 'END': {
            const nextAction = yield call(exitGame);
            yield put(nextAction);
            break;
        }
        default:
            // eslint-disable-next-line no-console
            yield console.log('[gameSetStateWorker warn] ', action.payload);
    }
}
