import cloneDeep from 'lodash/cloneDeep';

import {AudioState, AudioActions, AUDIO_ACTION_TYPES} from './types';

const audioState: AudioState = {
    contextState: 'suspended'
};

export const audioReducer = (state = audioState, action: AudioActions): AudioState => {
    switch (action.type) {
        case AUDIO_ACTION_TYPES.SET_STATE: {
            const newState = cloneDeep(state);
            newState.contextState = action.payload;

            return newState;
        }
        default:
            return state;
    }
};
