import {TopicActions, TopicState, TOPIC_ACTIONS_TYPES} from './types';

const initialState: TopicState = {
    isLoading: true,
    error: null,
    topic: null
};

export function topicReducer(state = initialState, action: TopicActions): TopicState {
    switch (action.type) {
        case TOPIC_ACTIONS_TYPES.GET_TOPIC: {
            return {
                ...state,
                isLoading: true,
                error: null,
                topic: null
            };
        }
        case TOPIC_ACTIONS_TYPES.GET_TOPIC_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                topic: action.payload
            };
        }
        case TOPIC_ACTIONS_TYPES.GET_TOPIC_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                topic: null
            };
        }
        default:
            return state;
    }
}
