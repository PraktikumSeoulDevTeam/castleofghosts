import {Level} from '../Level/types';
import type {GameCharacterInfo, GameLevel, GameStatePoint} from '~/core/types';

export const enum GAME_ACTION_TYPES {
    CHAR_SET_NAME = 'cog/game/char-set-name',
    CHAR_SET_POINTS = 'cog/game/char-set-points',
    SET_LEVEL = 'cog/game/set-level',
    SET_MAP = 'cog/game/set-map',
    SET_STATE = 'cog/game/set-state',
    REMOVE = 'cog/game/remove'
}

export interface GameState {
    character: Partial<GameCharacterInfo>;
    level: Partial<GameLevel>;
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
    payload: GameLevel;
}

export interface GameSetMapAction {
    type: GAME_ACTION_TYPES.SET_MAP;
    payload: Level;
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
    | GameSetMapAction
    | GameSetStateAction
    | GameRemoveAction;
