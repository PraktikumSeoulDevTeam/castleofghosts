import {LevelActions, LevelState, LEVEL_ACTION_TYPES} from './types';
import {Levels} from '../../services/LevelGenerator/__levels';

const initialState: LevelState = {
    levels: [...Levels]
};

export const levelReducer = (state = initialState, action: LevelActions): LevelState => {
    switch (action.type) {
        case LEVEL_ACTION_TYPES.SAVE_LEVELS: {
            return {
                levels: action.payload
            };
        }
        default:
            return state;
    }
};
