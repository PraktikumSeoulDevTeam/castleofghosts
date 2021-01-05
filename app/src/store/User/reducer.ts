import cloneDeep from 'lodash/cloneDeep';

import {UserActions, UserState, USER_ACTION_TYPES} from './types';

const userState: UserState = {
    info: {},
    geolocation: {
        latitude: null,
        longitude: null,
        city: null
    }
};

export const userReducer = (state = userState, action: UserActions): UserState => {
    switch (action.type) {
        case USER_ACTION_TYPES.SET: {
            const newState = cloneDeep(state);
            newState.info = action.payload;

            return newState;
        }
        case USER_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.info = {};

            return newState;
        }
        case USER_ACTION_TYPES.GEOLOCATION_SET: {
            const newState = cloneDeep(state);
            newState.geolocation = action.payload;

            return newState;
        }

        default:
            return state;
    }
};
