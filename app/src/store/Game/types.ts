import type {ApiCharacterInfo} from '../../api/types';

export const enum GAME_ACTION_TYPES {
    SET_CHAR_NAME = 'cog/game/set-char-name',
    SET_CHAR_POINTS = 'cog/game/set-char-points',
    REMOVE = 'cog/game/remove'
}

export interface GameState {
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

export interface GameRemoveAction {
    type: GAME_ACTION_TYPES.REMOVE;
}

export type GameActions = GameSetCharNameAction | GameSetCharPointsAction | GameRemoveAction;
