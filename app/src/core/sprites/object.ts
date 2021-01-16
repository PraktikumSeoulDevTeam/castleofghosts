import {createLoadPromise, createSprite} from './utils';

import type {Sprite} from './types';

const assetMap: HTMLImageElement = new Image();
assetMap.src = './assets/object.png';

/**
 * Создание карты спрайтов из изображения. В качестве значений, шаги размером {@link GRID}
 * Формат:
 * <image, сдвиг в карте по X, сдвиг в карте по Y, ширина, высота>
 */
const SPRITES = {
    KEY: createSprite(assetMap, 0, 0),
    DOOR: createSprite(assetMap, 4, 0),
    DOOR_OPEN: createSprite(assetMap, 5, 0),
    SPAWN: createSprite(assetMap, 7, 0)
};

export type ObjectParts = keyof typeof SPRITES;

export interface ObjectAsset {
    type: 'OBJECT';
    part: ObjectParts;
}

export const objectSprites = createLoadPromise(assetMap, SPRITES);

export const objectAssetToSprite = async (asset: ObjectAsset): Promise<Sprite> => {
    const sprites = await objectSprites;

    return sprites[asset.part];
};

export const objectSpriteToAsset = (part: ObjectParts): ObjectAsset => ({
    type: 'OBJECT',
    part
});
