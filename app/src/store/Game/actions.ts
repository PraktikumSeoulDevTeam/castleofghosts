import type {GameLevel, GameStatePoint} from '~/core/types';
import {
    GAME_ACTION_TYPES,
    GameCharSetNameAction,
    GameCharSetPointsAction,
    GameRemoveAction,
    GameSetLevelAction,
    GameSetStateAction
} from './types';

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

export function gameSetLevelAction(level: GameLevel): GameSetLevelAction {
    return {
        type: GAME_ACTION_TYPES.SET_LEVEL,
        payload: level
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
