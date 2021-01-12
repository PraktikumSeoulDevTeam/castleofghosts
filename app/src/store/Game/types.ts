import type {GameCharacterInfo, Level, GameStatePoint} from '~/core/types';

export const enum GAME_ACTION_TYPES {
    CHAR_SET_NAME = 'cog/game/char-set-name',
    CHAR_SET_POINTS = 'cog/game/char-set-points',
    SET_LEVEL = 'cog/game/set-level',
    SET_LEVEL_NUMBER = 'cog/game/set-level-number',
    SET_LEVELS_ORDER = 'cog/game/set-levels-order',
    SET_STATE = 'cog/game/set-state',
    REMOVE = 'cog/game/remove'
}

export interface GameState {
    character: Partial<GameCharacterInfo>;
    level: Partial<Level>;
    levelNumber: number;
    levelsOrder: number[];
    state: GameStatePoint;
}

export interface GameCharSetNameAction {
    type: GAME_ACTION_TYPES.CHAR_SET_NAME;
    payload: string;
}

export interface GameCharSetPointsAction {
    type: GAME_ACTION_TYPES.CHAR_SET_POINTS;
    payload: number;
}

export interface GameSetLevelAction {
    type: GAME_ACTION_TYPES.SET_LEVEL;
    payload: Level;
}

export interface GameSetLevelNumberAction {
    type: GAME_ACTION_TYPES.SET_LEVEL_NUMBER;
    payload?: number;
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
    | GameCharSetPointsAction
    | GameSetLevelAction
    | GameSetLevelNumberAction
    | GameSetLevelsOrderAction
    | GameSetStateAction
    | GameRemoveAction;
