import {isServer} from '~/utils';

import {createLoadPromise, createSprite, variantFactory} from '../utils';

import type {AssetVariants, Sprite} from '../types';

const assetMap: HTMLImageElement = isServer ? ({} as HTMLImageElement) : new Image();
assetMap.src = './assets/floor.png';

/**
 * Создание карты спрайтов из изображения. В качестве значений, шаги размером {@link GRID}
 * Формат:
 * <image, сдвиг в карте по X, сдвиг в карте по Y, ширина, высота>
 */
const SPRITES = {
    ROOM: createSprite(assetMap, 0, 0, 3, 3),
    SINGLE: createSprite(assetMap, 5, 0),
    VERTICAL: createSprite(assetMap, 3, 0, 1, 3),
    HORIZONTAL: createSprite(assetMap, 4, 1, 3, 1)
};

// TODO можно дополнить остальными вариантами, если понадобится
const VARIANTS: AssetVariants = {
    BRICK_1: {
        x: 0,
        y: 3
    },
    BRICK_2: {
        x: 0,
        y: 6
    },
    BRICK_3: {
        x: 0,
        y: 9
    },
    BRICK_4: {
        x: 0,
        y: 12
    }
};

export type FloorParts = keyof typeof SPRITES;

export interface FloorAsset {
    type: 'FLOOR';
    part: FloorParts;
}

// TODO на данный момент жестко зашит вариант. Возможна реализация с изменением в рантайме
export const floorSprites = createLoadPromise(assetMap, variantFactory(SPRITES, VARIANTS.BRICK_2));

export const floorAssetToSprite = async (asset: FloorAsset): Promise<Sprite> => {
    const sprites = await floorSprites;

    return sprites[asset.part];
};

export const floorSpriteToAsset = (part: FloorParts): FloorAsset => ({
    type: 'FLOOR',
    part
});
