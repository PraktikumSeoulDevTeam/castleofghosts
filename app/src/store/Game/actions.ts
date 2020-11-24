import {GAME_ACTION_TYPES, GameSetCharNameAction, GameSetCharPointsAction, GameRemoveAction} from './types';

export function gameSetCharNameAction(characterName: string): GameSetCharNameAction {
    return {
        type: GAME_ACTION_TYPES.SET_CHAR_NAME,
        payload: characterName
    };
}

export function gameSetCharPointsAction(characterPoints: number): GameSetCharPointsAction {
    return {
        type: GAME_ACTION_TYPES.SET_CHAR_POINTS,
        payload: characterPoints
    };
}

export function gameRemoveAction(): GameRemoveAction {
    return {
        type: GAME_ACTION_TYPES.REMOVE
    };
}
