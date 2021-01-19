import cloneDeep from 'lodash/cloneDeep';

import {STATE} from '~/core/params';

import {GAME_ACTION_TYPES, GameState, GameActions} from './types';

const gameState: GameState = {
    character: {},
    level: {},
    levelNumber: 0,
    levelsOrder: [],
    countLevels: 0,
    state: STATE.OFF
};

export const gameReducer = (state = gameState, action: GameActions): GameState => {
    switch (action.type) {
        case GAME_ACTION_TYPES.CHAR_SET_NAME: {
            const newState = cloneDeep(state);
            newState.character.name = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_COUNT_LEVELS: {
            const newState = cloneDeep(state);
            newState.countLevels = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.CHAR_SET_POINTS: {
            const newState = cloneDeep(state);
            newState.character.points = action.payload;

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVEL: {
            const newState = cloneDeep(state);
            newState.level = cloneDeep(action.payload);

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVEL_NUMBER: {
            const newState = cloneDeep(state);
            if (action.payload !== undefined) {
                newState.levelNumber = action.payload;
            } else {
                newState.levelNumber += 1;
            }

            return newState;
        }
        case GAME_ACTION_TYPES.SET_LEVELS_ORDER: {
            const newState = cloneDeep(state);
            newState.levelsOrder = action.payload;

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
            newState.levelsOrder = [];
            newState.levelNumber = 0;
            newState.level = {};
            newState.countLevels = 0;
            newState.state = STATE.OFF;

            return newState;
        }
        default:
            return state;
    }
};
