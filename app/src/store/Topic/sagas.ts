import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';

import {getTopics} from '../Forum/__topics';
import {topicGetErrorAction, topicGetSuccessAction} from './actions';

import {Topic} from '../Forum/types';
import {TopicGetAction, TOPIC_ACTIONS_TYPES} from './types';

export function* topicWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(TOPIC_ACTIONS_TYPES.GET_TOPIC, getTopicWorker);
}

function* getTopicWorker(action: TopicGetAction) {
    try {
        const topics: Topic[] = yield call(getTopics);
        const topic = topics.find((t) => t.id === action.payload);

        yield put(topicGetSuccessAction(topic ?? topics[0]));
    } catch (error) {
        yield put(topicGetErrorAction(error.message));
    }
}
