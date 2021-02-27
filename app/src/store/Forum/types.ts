import type {ApiForumTopicCreateRequest, ApiForumPostCreateRequest} from '@/api.d';

/**
 * Forum Models
 */
export interface Comment {
    id: number;
    author: string;
    content: string;
    createdAt: Date;
}

export interface Topic {
    id: number;
    author: string;
    title: string;
    content: string;
    createdAt: Date;
    comments: Comment[];
    rating: number;
}

export interface ForumState {
    topics: Topic[];
    isLoading: boolean;
    error?: string;
}

export interface CreatePostArgs {
    post: ApiForumPostCreateRequest;
    id: number;
}

export const enum FORUM_ACTION_TYPES {
    GET_DATA = 'cog/forum/get-data',
    GET_DATA_SUCCESS = 'cog/forum/get-data-success',
    GET_DATA_ERROR = 'cog/forum/get-data-error',
    CREATE_TOPIC = 'cog/forum/create-topic',
    CREATE_POST = 'cog/forum/create-post'
}

export interface ForumGetDataAction {
    type: FORUM_ACTION_TYPES.GET_DATA;
}

export interface ForumGetDataSuccessAction {
    type: FORUM_ACTION_TYPES.GET_DATA_SUCCESS;
    payload: Topic[];
}

export interface ForumGetDataErrorAction {
    type: FORUM_ACTION_TYPES.GET_DATA_ERROR;
    payload: string;
}

export interface ForumCreateTopicAction {
    type: FORUM_ACTION_TYPES.CREATE_TOPIC;
    payload: ApiForumTopicCreateRequest;
}

export interface ForumCreatePostAction {
    type: FORUM_ACTION_TYPES.CREATE_POST;
    payload: CreatePostArgs;
}

export type ForumActions =
    | ForumGetDataAction
    | ForumGetDataSuccessAction
    | ForumGetDataErrorAction
    | ForumCreateTopicAction
    | ForumCreatePostAction;
