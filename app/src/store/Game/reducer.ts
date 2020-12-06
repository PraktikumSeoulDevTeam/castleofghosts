import {cloneDeep} from 'lodash';
import {GAME_ACTION_TYPES, GameState, GameActions} from './types';

// TODO mock
const gameState: GameState = {
    inProgress: false,
    character: {}
};

export const gameReducer = (state = gameState, action: GameActions): GameState => {
    switch (action.type) {
        case GAME_ACTION_TYPES.SET_CHAR_NAME: {
            const newState = cloneDeep(state);
            newState.character.name = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_CHAR_POINTS: {
            const newState = cloneDeep(state);
            newState.character.points = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.START: {
            const newState = cloneDeep(state);
            newState.inProgress = true;

            return newState;
        }

        case GAME_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.character = {};

            return newState;
        }
        default:
            return state;
    }
};
