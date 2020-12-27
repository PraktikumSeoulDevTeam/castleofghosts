import cloneDeep from 'lodash/cloneDeep';

import {UtilityState, UtilityActions, UTILITY_ACTION_TYPES} from './types';

const utilityState: UtilityState = {
    isLoading: false
};

export const utilityReducer = (state = utilityState, action: UtilityActions): UtilityState => {
    switch (action.type) {
        case UTILITY_ACTION_TYPES.SET_LOADING: {
            const newState = cloneDeep(state);
            newState.isLoading = action.payload;

            return newState;
        }
        default:
            return state;
    }
};
