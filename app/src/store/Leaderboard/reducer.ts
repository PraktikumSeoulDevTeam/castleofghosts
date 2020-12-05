import {cloneDeep} from 'lodash';
import {LB_ACTION_TYPES, LeadeboardState, LbActions} from './types';

// TODO mock
const leadeboardState: LeadeboardState = {
    list: [
        {id: 1, name: 'user1', points: 100},
        {id: 2, name: 'user1', points: 100},
        {id: 3, name: 'user1', points: 100},
        {id: 4, name: 'user1', points: 100},
        {id: 5, name: 'user1', points: 100}
    ]
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
