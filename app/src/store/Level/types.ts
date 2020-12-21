import {GeneratorConfiguration} from '../../services/LevelGenerator/types';
/**
 * Level Model's section
 */
export type Point = [x: number, y: number];

export interface BackgroundType {
    asset: {type: string; part: string};
    canWalk: boolean;
}

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
    map: BackgroundType[][];
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
    payload: GeneratorConfiguration;
}

export interface LevelSaveAction {
    type: LEVEL_ACTION_TYPES.SAVE_LEVELS;
    payload: Level[];
}

export type LevelActions = LevelGenerateAction | LevelSaveAction;
