import {cloneDeep} from 'lodash';
import {UserActions, UserState, USER_ACTION_TYPES} from './types';

const userState: UserState = {
    info: {}
};

export const userReducer = (state = userState, action: UserActions): UserState => {
    switch (action.type) {
        case USER_ACTION_TYPES.UPDATE: {
            const newState = cloneDeep(state);
            newState.info = action.payload;

            return newState;
        }
        case USER_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.info = {};

            return newState;
        }
        default:
            return state;
    }
};