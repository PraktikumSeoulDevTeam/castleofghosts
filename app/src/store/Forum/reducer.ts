import {ForumActions, ForumState, FORUM_ACTION_TYPES} from './types';

const initialState: ForumState = {
    topics: [],
    isLoading: true
};

export function forumReducer(state = initialState, action: ForumActions): ForumState {
    switch (action.type) {
        case FORUM_ACTION_TYPES.GET_DATA: {
            return {
                topics: [],
                isLoading: true
            };
        }
        case FORUM_ACTION_TYPES.GET_DATA_SUCCESS: {
            return {
                topics: action.payload,
                isLoading: false
            };
        }
        case FORUM_ACTION_TYPES.GET_DATA_ERROR: {
            return {
                topics: [],
                isLoading: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
}
