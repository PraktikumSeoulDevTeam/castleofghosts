import {Level} from '../Level/types';
import {GAME_ACTION_TYPES} from './types';
import type {
    GameCharSetNameAction,
    GameCharSetPointsAction,
    GameRemoveAction,
    GameSetLevelAction,
    GameSetMapAction,
    GameSetStateAction
} from './types';
import type {GameLevel, GameStatePoint} from '~/core/types';

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

export function gameSetMapAction(level: Level): GameSetMapAction {
    return {
        type: GAME_ACTION_TYPES.SET_MAP,
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
