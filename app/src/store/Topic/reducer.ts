import {TopicActions, TopicState, TOPIC_ACTIONS_TYPES} from './types';

const initialState: TopicState = {
    isLoading: true,
    error: undefined,
    topic: undefined
};

export function topicReducer(state = initialState, action: TopicActions): TopicState {
    switch (action.type) {
        case TOPIC_ACTIONS_TYPES.GET_TOPIC: {
            return {
                ...state,
                isLoading: true
            };
        }
        case TOPIC_ACTIONS_TYPES.GET_TOPIC_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                topic: action.payload
            };
        }
        case TOPIC_ACTIONS_TYPES.GET_TOPIC_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
}
