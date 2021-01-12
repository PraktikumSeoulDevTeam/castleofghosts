import {ROLE} from '~/core/params';
import {CharAsset} from '~/core/sprites/character/character';
import type {FloorAsset} from '~/core/sprites/map/floor';
import type {WallAsset} from '~/core/sprites/map/wall';
import {ObjectAsset} from '~/core/sprites/object';

import {GeneratorConfiguration} from '~/services/LevelGenerator/types';

/**
 * Level Model's section
 */
export type Point = [x: number, y: number];

export type BackgroundAsset = WallAsset | FloorAsset;

export interface BackgroundPart {
    asset?: BackgroundAsset;
    width?: number;
    height?: number;
    canWalk?: boolean;
}

/**
 * Общий параметр у слоев Object и Chars
 */
interface BasePartConfig {
    canWalk?: boolean;
    role?: ROLE;
}

export interface ObjectPart extends BasePartConfig {
    asset?: ObjectAsset;
}

export interface CharPart extends BasePartConfig {
    asset?: CharAsset;
}

export type BackgroundMap = BackgroundPart[][];
export type ObjectsMap = ObjectPart[][];
export type CharsMap = CharPart[][];

export interface Level {
    startPoint: Point;
    endPoint: Point;
    map: BackgroundMap;
    objects: ObjectsMap;
    chars: CharsMap;
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
