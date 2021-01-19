import {
    GAME_ACTION_TYPES,
    GameCharSetNameAction,
    GameCharSetTimeAction,
    GameCharAddTimeAction,
    GameRemoveAction,
    GameSetLevelsOrderAction,
    GameSetStateAction,
    GameSetLevelNumberAction
} from './types';
import type {GameStatePoint} from '~/core/types';

export function gameCharSetNameAction(characterName: string): GameCharSetNameAction {
    return {
        type: GAME_ACTION_TYPES.CHAR_SET_NAME,
        payload: characterName
    };
}

export function gameCharSetTimeAction(levelTime: number): GameCharSetTimeAction {
    return {
        type: GAME_ACTION_TYPES.CHAR_SET_TIME,
        payload: levelTime
    };
}

export function gameCharAddTimeAction(levelTime: number): GameCharAddTimeAction {
    return {
        type: GAME_ACTION_TYPES.CHAR_ADD_TIME,
        payload: levelTime
    };
}

export function gameSetLevelsOrderAction(levelsOrder: number[]): GameSetLevelsOrderAction {
    return {
        type: GAME_ACTION_TYPES.SET_LEVELS_ORDER,
        payload: levelsOrder
    };
}

export function gameSetLevelNumberAction(levelNumber: number): GameSetLevelNumberAction {
    return {
        type: GAME_ACTION_TYPES.SET_LEVEL_NUMBER,
        payload: levelNumber
    };
}

export function gameSetStateAction(gameState: GameStatePoint): GameSetStateAction {
    return {
        type: GAME_ACTION_TYPES.SET_STATE,
        payload: gameState
    };
}

export function gameRemoveAction(): GameRemoveAction {
    return {
        type: GAME_ACTION_TYPES.REMOVE
    };
}
