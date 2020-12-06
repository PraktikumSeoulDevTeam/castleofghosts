import {ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {gameSetCharNameAction} from './actions';
import {GAME_ACTION_TYPES, GameSetCharNameAction} from './types';

export function* gameWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(GAME_ACTION_TYPES.SET_CHAR_NAME, setCharacterNameWorker);
}

function* setCharacterNameWorker(action: GameSetCharNameAction) {
    try {
        yield put(gameSetCharNameAction(action.payload));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[addToLeaderboardWorker error] ', error);
    }
}
