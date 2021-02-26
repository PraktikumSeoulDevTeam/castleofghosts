import {Topic} from '../Forum/types';
import {TopicGetAction, TopicGetErrorAction, TopicGetSuccessAction, TOPIC_ACTIONS_TYPES} from './types';

export function topicGetAction(id: number): TopicGetAction {
    return {
        type: TOPIC_ACTIONS_TYPES.GET_TOPIC,
        payload: id
    };
}

export function topicGetSuccessAction(topic: Topic): TopicGetSuccessAction {
    return {
        type: TOPIC_ACTIONS_TYPES.GET_TOPIC_SUCCESS,
        payload: topic
    };
}

export function topicGetErrorAction(error: string): TopicGetErrorAction {
    return {
        type: TOPIC_ACTIONS_TYPES.GET_TOPIC_ERROR,
        payload: error
    };
}
