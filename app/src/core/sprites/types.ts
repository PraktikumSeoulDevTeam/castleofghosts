import {CharAsset} from './character/character';
import {FloorAsset} from './map/floor';
import {WallAsset} from './map/wall';
import {ObjectAsset} from './object';

export interface Sprite {
    image?: HTMLImageElement;
    posx: number;
    posy: number;
    width: number;
    height: number;
}

export type AssetMap<T extends string> = Record<T, Sprite>;

export interface AssetVariant {
    x: number;
    y: number;
}

export type AssetVariants = Record<string, AssetVariant>;

export type Asset = FloorAsset | WallAsset | ObjectAsset | CharAsset;
