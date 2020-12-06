import {GeneratorConfiguration} from '../../../services/LevelGenerator/types';

/**
 * Level Model's section
 */
export type Point = [x: number, y: number];

export const enum InterestType {
    KEY = 0,
    CHEST = 1
}

export interface Interest {
    position: Point;
    type: InterestType;
}

// Фон для карты
export const enum BackgroundType {
    ROAD = 0,
    WALL = 1,
    CLOSE_GATE = 2,
    OPEN_GATE = 3
}

export interface Level {
    startPosition: Point;
    finishPosition: Point;
    interests: Interest[];
    map: BackgroundType[][];
    canExit: boolean;
}
/* ***************************** */

export const enum LEVEL_ACTION_TYPES {
    GENERATE_LEVELS = 'cog/game/level/generate'
}

export interface LevelGenerateAction {
    action: LEVEL_ACTION_TYPES.GENERATE_LEVELS;
    payload: GeneratorConfiguration;
}
