import {ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {GAME_ACTION_TYPES} from './types';

export function* gameWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(GAME_ACTION_TYPES.START_GAME, gameStartInititializer);
}

function* gameStartInititializer() {
    yield put();
}
