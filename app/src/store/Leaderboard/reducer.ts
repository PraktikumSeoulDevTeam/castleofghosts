import {cloneDeep} from 'lodash';
import {LB_ACTION_TYPES, LeadeboardState, LbActions} from './types';

const leadeboardState: LeadeboardState = {
    list: []
};

export const leaderboardReducer = (state = leadeboardState, action: LbActions): LeadeboardState => {
    switch (action.type) {
        case LB_ACTION_TYPES.ADD: {
            const newState = cloneDeep(state);
            newState.list = [...newState.list, ...action.payload];

            return newState;
        }
        case LB_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.list = [];

            return newState;
        }
        default:
            return state;
    }
};
