import {
    ForumCreateTopicAction,
    ForumGetDataAction,
    ForumGetDataErrorAction,
    ForumGetDataSuccessAction,
    ForumCreatePostAction,
    FORUM_ACTION_TYPES,
    Topic,
    CreatePostArgs
} from './types';
import {ApiCreateTopic} from '~/api/types';

export function forumGetDataAction(): ForumGetDataAction {
    return {
        type: FORUM_ACTION_TYPES.GET_DATA
    };
}

export function forumGetDataSuccessAction(topics: Topic[]): ForumGetDataSuccessAction {
    return {
        type: FORUM_ACTION_TYPES.GET_DATA_SUCCESS,
        payload: topics
    };
}

export function forumGetDataErrorAction(error: string): ForumGetDataErrorAction {
    return {
        type: FORUM_ACTION_TYPES.GET_DATA_ERROR,
        payload: error
    };
}

export function forumCreateTopicAction(topic: ApiCreateTopic): ForumCreateTopicAction {
    return {
        type: FORUM_ACTION_TYPES.CREATE_TOPIC,
        payload: topic
    };
}

export function forumCreatePostAction(post: CreatePostArgs): ForumCreatePostAction {
    return {
        type: FORUM_ACTION_TYPES.CREATE_POST,
        payload: post
    };
}
