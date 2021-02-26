import {call, ForkEffect, put, takeEvery} from 'redux-saga/effects';

import {createTopic, createPost} from '~/api';

import {getTopics} from './__topics';
import {forumGetDataAction, forumGetDataErrorAction, forumGetDataSuccessAction} from './actions';

import {ForumCreatePostAction, ForumCreateTopicAction, FORUM_ACTION_TYPES} from './types';

export function* forumWatcher(): Generator<ForkEffect<never>> {
    yield takeEvery(FORUM_ACTION_TYPES.GET_DATA, getDataWorker);
    yield takeEvery(FORUM_ACTION_TYPES.CREATE_TOPIC, createTopiWorker);
    yield takeEvery(FORUM_ACTION_TYPES.CREATE_POST, createPostWorker);
}

function* getDataWorker() {
    try {
        const topics = yield call(getTopics);
        yield put(forumGetDataSuccessAction(topics));
    } catch (error) {
        yield put(forumGetDataErrorAction(error.message));
    }
}

function* createTopiWorker(action: ForumCreateTopicAction) {
    try {
        yield call(createTopic, action.payload);
        yield put(forumGetDataAction());
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`error at createTopiWorker\n`, error);
    }
}

function* createPostWorker(action: ForumCreatePostAction) {
    try {
        const {id, post} = action.payload;
        yield call(createPost, id, post);
        yield put(forumGetDataAction());
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`error at createPostWorker\n`, error);
    }
}
