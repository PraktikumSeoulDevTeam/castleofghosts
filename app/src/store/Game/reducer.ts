import cloneDeep from 'lodash/cloneDeep';
import {GAME_ACTION_TYPES, GameState, GameActions} from './types';

const gameState: GameState = {
    character: {},
    level: {},
    state: 'OFF'
};

export const gameReducer = (state = gameState, action: GameActions): GameState => {
    switch (action.type) {
        case GAME_ACTION_TYPES.CHAR_SET_NAME: {
            const newState = cloneDeep(state);
            newState.character.name = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.CHAR_SET_POINTS: {
            const newState = cloneDeep(state);
            newState.character.points = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVEL: {
            const newState = cloneDeep(state);
            newState.level = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_STATE: {
            const newState = cloneDeep(state);
            newState.state = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.character = {};
            newState.state = 'OFF';

            return newState;
        }
        default:
            return state;
    }
};
