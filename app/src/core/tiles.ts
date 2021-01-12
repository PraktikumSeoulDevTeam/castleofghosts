import {charAssetToSprite} from './sprites/character/character';
import {floorAssetToSprite} from './sprites/map/floor';
import {wallAssetToSprite} from './sprites/map/wall';
import {objectAssetToSprite} from './sprites/object';

import type {Asset, Sprite} from './sprites/types';

/**
 * Трансформация представления ассетов в карте в спрайт
 * @param asset     Представление ассетов в карте
 * @return Promise на спрайт
 */
// eslint-disable-next-line consistent-return
export function assetToSprite(asset: Asset): Promise<Sprite> | never {
    // eslint-disable-next-line default-case
    switch (asset.type) {
        case 'WALL':
            return wallAssetToSprite(asset);
        case 'FLOOR':
            return floorAssetToSprite(asset);
        case 'OBJECT':
            return objectAssetToSprite(asset);
        case 'CHAR':
            return charAssetToSprite(asset);
    }
}
