import {
    GAME_ACTION_TYPES,
    GameCharSetNameAction,
    GameCharSetPointsAction,
    GameRemoveAction,
    GameSetLevelsOrderAction,
    GameSetLevelAction,
    GameSetStateAction,
    GameSetLevelNumberAction
} from './types';
import type {Level, GameStatePoint} from '~/core/types';

export function gameCharSetNameAction(characterName: string): GameCharSetNameAction {
    return {
        type: GAME_ACTION_TYPES.CHAR_SET_NAME,
        payload: characterName
    };
}

export function gameCharSetPointsAction(characterPoints: number): GameCharSetPointsAction {
    return {
        type: GAME_ACTION_TYPES.CHAR_SET_POINTS,
        payload: characterPoints
    };
}

export function gameSetLevelsOrderAction(levelsOrder: number[]): GameSetLevelsOrderAction {
    return {
        type: GAME_ACTION_TYPES.SET_LEVELS_ORDER,
        payload: levelsOrder
    };
}

export function gameSetLevelAction(level: Level): GameSetLevelAction {
    return {
        type: GAME_ACTION_TYPES.SET_LEVEL,
        payload: level
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
