import {LevelsActions, LevelsState, LEVELS_ACTION_TYPES} from './types';

const initialState: LevelsState = {
    levels: []
};

export const levelsReducer = (state = initialState, action: LevelsActions): LevelsState => {
    switch (action.type) {
        case LEVELS_ACTION_TYPES.ADD: {
            return {levels: [...state.levels, ...action.payload]};
        }
        default:
            return state;
    }
};
