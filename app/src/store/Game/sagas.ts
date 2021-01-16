import {ForkEffect, put, call, takeEvery, select} from 'redux-saga/effects';

import {drawMap} from '~/core/bg.canvas';
import {createGame, exitGame, loadLevel, pauseGame, play} from '~/core/engine';
import {audioControlSampleAction} from '~/store/Audio/actions';
import {levelGenerateAction} from '~/store/Level/actions';

import {gameSetMapAction} from './actions';

import {GameSetStateAction, GAME_ACTION_TYPES} from './types';
import type {SampleControl} from '~/core/audio/types';
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
            yield put(gameSetMapAction(level));

            yield call(drawMap, level);
            yield call(play);
            yield put(audioControlSampleAction(gameLoopStart));
            break;
        }
        case 'PAUSE': {
            yield call(pauseGame);
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        case 'END': {
            const nextAction = yield call(exitGame);
            yield put(nextAction);
            yield put(audioControlSampleAction(gameLoopStop));
            break;
        }
        default:
            // eslint-disable-next-line no-console
            yield console.log('[gameSetStateWorker warn] ', action.payload);
    }
}
