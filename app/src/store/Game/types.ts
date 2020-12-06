import type {ApiCharacterInfo} from '../../api/types';

export const enum GAME_ACTION_TYPES {
    SET_CHAR_NAME = 'cog/game/set-char-name',
    SET_CHAR_POINTS = 'cog/game/set-char-points',
    START = 'cog/game/start',
    REMOVE = 'cog/game/remove'
}

export interface GameState {
    inProgress: boolean;
    character: Partial<ApiCharacterInfo>;
}

export interface GameSetCharNameAction {
    type: GAME_ACTION_TYPES.SET_CHAR_NAME;
    payload: string;
}

export interface GameSetCharPointsAction {
    type: GAME_ACTION_TYPES.SET_CHAR_POINTS;
    payload: number;
}

export interface GameStartAction {
    type: GAME_ACTION_TYPES.START;
}

export interface GameRemoveAction {
    type: GAME_ACTION_TYPES.REMOVE;
}

export type GameActions = GameSetCharNameAction | GameSetCharPointsAction | GameStartAction | GameRemoveAction;
