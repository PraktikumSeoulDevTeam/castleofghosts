import {cloneDeep} from 'lodash';
import {GAME_ACTION_TYPES, GameState, GameActions} from './types';

// TODO mock
const gameState: GameState = {
    character: {id: 1, name: 'Sofa Warlord', points: 180},
    currentLevel: 0,
    gameEnd: false
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
        case GAME_ACTION_TYPES.REMOVE: {
            const newState = cloneDeep(state);
            newState.character = {};

            return newState;
        }
        default:
            return state;
    }
};
