import {ForkEffect, put, call, takeEvery, select} from 'redux-saga/effects';

import {drawMap} from '~/core/bg.canvas';
import {createGame, exitGame, loadLevel, pauseGame, play} from '~/core/engine';
import {levelGenerateAction} from '~/store/Level/actions';

import {GameSetStateAction, GAME_ACTION_TYPES} from './types';
import {AppStoreState} from '~/store/types';

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
            yield put(levelGenerateAction());
            yield put(nextAction);
            break;
        }
        case 'GAME': {
            const state: AppStoreState = yield select();
            const level = state.level.levels[(state.game.level.number ?? 1) - 1];

            yield call(drawMap, level);
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
