import type {GameCharacterInfo, GameStatePoint} from '~/core/types';

export const enum GAME_ACTION_TYPES {
    CHAR_SET_NAME = 'cog/game/char-set-name',
    CHAR_SET_TIME = 'cog/game/char-set-time',
    CHAR_ADD_TIME = 'cog/game/char-add-time',
    SET_LEVEL_NUMBER = 'cog/game/set-level-number',
    SET_LEVELS_ORDER = 'cog/game/set-levels-order',
    SET_STATE = 'cog/game/set-state',
    REMOVE = 'cog/game/remove'
}

export interface GameState {
    character: GameCharacterInfo;
    levelNumber: number;
    levelsOrder: number[];
    state: GameStatePoint;
}

export interface GameCharSetNameAction {
    type: GAME_ACTION_TYPES.CHAR_SET_NAME;
    payload: string;
}

export interface GameCharSetTimeAction {
    type: GAME_ACTION_TYPES.CHAR_SET_TIME;
    payload: number;
}

export interface GameCharAddTimeAction {
    type: GAME_ACTION_TYPES.CHAR_ADD_TIME;
    payload: number;
}

export interface GameSetLevelNumberAction {
    type: GAME_ACTION_TYPES.SET_LEVEL_NUMBER;
    payload: number;
}

export interface GameSetLevelsOrderAction {
    type: GAME_ACTION_TYPES.SET_LEVELS_ORDER;
    payload: number[];
}

export interface GameSetStateAction {
    type: GAME_ACTION_TYPES.SET_STATE;
    payload: GameStatePoint;
}

export interface GameRemoveAction {
    type: GAME_ACTION_TYPES.REMOVE;
}

export type GameActions =
    | GameCharSetNameAction
    | GameCharSetTimeAction
    | GameCharAddTimeAction
    | GameSetLevelNumberAction
    | GameSetLevelsOrderAction
    | GameSetStateAction
    | GameRemoveAction;
