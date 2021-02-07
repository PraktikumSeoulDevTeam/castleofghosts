import {
    ForumGetDataAction,
    ForumGetDataErrorAction,
    ForumGetDataSuccessAction,
    FORUM_ACTION_TYPES,
    Topic
} from './types';

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
