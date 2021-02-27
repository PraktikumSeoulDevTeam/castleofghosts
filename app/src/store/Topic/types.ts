import {Topic} from '../Forum/types';

export interface TopicState {
    isLoading: boolean;
    topic?: Topic;
    error?: string;
}

export const enum TOPIC_ACTIONS_TYPES {
    GET_TOPIC = 'cog/topic/get-topic',
    GET_TOPIC_SUCCESS = 'cog/topic/get-topic-success',
    GET_TOPIC_ERROR = 'cog/topic/get-topic-error'
}

export interface TopicGetAction {
    type: TOPIC_ACTIONS_TYPES.GET_TOPIC;
    payload: number;
}

export interface TopicGetSuccessAction {
    type: TOPIC_ACTIONS_TYPES.GET_TOPIC_SUCCESS;
    payload: Topic;
}

export interface TopicGetErrorAction {
    type: TOPIC_ACTIONS_TYPES.GET_TOPIC_ERROR;
    payload: string;
}

export type TopicActions = TopicGetAction | TopicGetSuccessAction | TopicGetErrorAction;
