import {call, ForkEffect, put, takeEvery} from 'redux-saga/effects';

import {getTopics} from './__topics';
import {forumGetDataErrorAction, forumGetDataSuccessAction} from './actions';

import {FORUM_ACTION_TYPES} from './types';

export function* forumWatcher(): Generator<ForkEffect<never>> {
    yield takeEvery(FORUM_ACTION_TYPES.GET_DATA, getDataWorker);
}

function* getDataWorker() {
    try {
        const topics = yield call(getTopics);
        yield put(forumGetDataSuccessAction(topics));
    } catch (error) {
        yield put(forumGetDataErrorAction(error.message));
    }
}
