import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';

import {addPost, addTopic} from '~/api/local';

import {topicGetAction} from '../Topic/actions';
import {getTopics} from './__topics';
import {forumGetDataAction, forumGetDataErrorAction, forumGetDataSuccessAction} from './actions';

import {ForumCreatePostAction, ForumCreateTopicAction, FORUM_ACTION_TYPES} from './types';

export function* forumWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(FORUM_ACTION_TYPES.GET_DATA, getDataWorker);
    yield takeLeading(FORUM_ACTION_TYPES.CREATE_TOPIC, createTopicWorker);
    yield takeLeading(FORUM_ACTION_TYPES.CREATE_POST, createPostWorker);
}

function* getDataWorker() {
    try {
        const topics = yield call(getTopics);
        yield put(forumGetDataSuccessAction(topics));
    } catch (error) {
        yield put(forumGetDataErrorAction(error.message));
    }
}

function* createTopicWorker(action: ForumCreateTopicAction) {
    try {
        yield call(addTopic, action.payload);
        yield put(forumGetDataAction());
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`error at createTopiWorker\n`, error);
    }
}

function* createPostWorker(action: ForumCreatePostAction) {
    try {
        const {id, post} = action.payload;
        yield call(addPost, id, post);
        yield put(forumGetDataAction());
        yield put(topicGetAction(id));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`error at createPostWorker\n`, error);
    }
}
