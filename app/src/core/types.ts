import {STATE} from './params';
import {CharAsset} from './sprites/character/character';
import {FloorAsset} from './sprites/map/floor';
import {WallAsset} from './sprites/map/wall';
import {ObjectAsset} from './sprites/object';

import type {Asset} from './sprites/types';

export type EmptyCallback = () => void;
export type ArrowPressCallback = (x: number, y: number) => void;

export type GameStatePoint = STATE;

export interface CanvasContext {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
}

/**
 * Информация о персонаже
 */
export interface GameCharacterInfo {
    id: number;
    cogTime: number;
    name?: string;
}

/**
 * Информация о движении персонажа
 */
export interface GameCharacterMove {
    point: Point;
    needRender: boolean;
}

export type Point = [x: number, y: number];

export type BackgroundAsset = WallAsset | FloorAsset;
export type BackgroundMap = Tile<BackgroundAsset>[][];

export interface Level {
    name?: string;
    startPoint: Point;
    endPoint: Point;
    keyPoint: Point;
    map: BackgroundMap;
}

export interface LevelEd {
    version?: number;
    name?: string;
    map: Tile<WallAsset | FloorAsset>[][];
    objects: Tile<ObjectAsset>[][];
    chars: Tile<ObjectAsset | CharAsset>[][];
}

export interface Tile<T = Asset> {
    asset?: T;
    canWalk?: boolean;
    width?: number;
    height?: number;
}
