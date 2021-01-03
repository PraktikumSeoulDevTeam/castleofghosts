import {Floor, Wall} from '../../core/sprites/map';

import {GeneratorConfiguration} from '../../services/LevelGenerator/types';

/**
 * Level Model's section
 */
export type Point = [x: number, y: number];

export type BackgroundAsset = {part: 'FLOOR' | 'WALL'; type: keyof Floor | keyof Wall};
export interface BackgroundPart {
    asset: BackgroundAsset | null;
    canWalk: boolean;
}

export type BackgroundMap = BackgroundPart[][];

export const enum InterestType {
    KEY = 0,
    CHEST = 1
}

export interface Interest {
    position: Point;
    type: InterestType;
}

export interface Level {
    startPoint: Point;
    endPoint: Point;
    map: BackgroundMap;
    interests: Interest[];
}

/**
 * State
 */
export interface LevelState {
    levels: Level[];
}

/**
 * Actions
 */
export const enum LEVEL_ACTION_TYPES {
    GENERATE_LEVELS = 'cog/game/level/generate',
    SAVE_LEVELS = 'cog/game/level/save'
}

export interface LevelGenerateAction {
    type: LEVEL_ACTION_TYPES.GENERATE_LEVELS;
    payload?: GeneratorConfiguration;
}

export interface LevelSaveAction {
    type: LEVEL_ACTION_TYPES.SAVE_LEVELS;
    payload: Level[];
}

export type LevelActions = LevelGenerateAction | LevelSaveAction;
