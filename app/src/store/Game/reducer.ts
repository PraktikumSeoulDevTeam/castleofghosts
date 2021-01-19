import clone from 'lodash/clone';

import {STATE} from '~/core/params';

import {GAME_ACTION_TYPES, GameState, GameActions} from './types';

const gameState: GameState = {
    character: createNewCharacter(),
    levelNumber: 0,
    levelsOrder: [],
    state: STATE.OFF
};

export const gameReducer = (state = gameState, action: GameActions): GameState => {
    switch (action.type) {
        case GAME_ACTION_TYPES.CHAR_SET_NAME: {
            const newState = clone(state);
            const newCharacter = clone(newState.character);
            newCharacter.name = action.payload;
            newState.character = newCharacter;

            return newState;
        }
        case GAME_ACTION_TYPES.CHAR_SET_TIME: {
            const newState = clone(state);
            const newCharacter = clone(newState.character);
            newCharacter.cogTime = action.payload;
            newState.character = newCharacter;

            return newState;
        }
        case GAME_ACTION_TYPES.CHAR_ADD_TIME: {
            const newState = clone(state);
            const newCharacter = clone(newState.character);
            newCharacter.cogTime += action.payload;
            newState.character = newCharacter;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVEL_NUMBER: {
            const newState = clone(state);
            newState.levelNumber = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVELS_ORDER: {
            const newState = clone(state);
            newState.levelsOrder = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_STATE: {
            const newState = clone(state);
            newState.state = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.REMOVE: {
            const newState = clone(state);
            newState.character = createNewCharacter();
            newState.levelsOrder = [];
            newState.levelNumber = 0;
            newState.state = STATE.OFF;

            return newState;
        }
        default:
            return state;
    }
};

function createNewCharacter() {
    return {
        id: Date.now(),
        cogTime: 0
    };
}
