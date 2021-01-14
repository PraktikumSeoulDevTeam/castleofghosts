import {createLoadPromise, createSprite, variantFactory} from '../utils';

import type {AssetVariants, Sprite} from '../types';

const assetMap: HTMLImageElement = new Image();
assetMap.src = './assets/char.png';

/**
 * Создание карты спрайтов из изображения. В качестве значений, шаги размером {@link GRID}
 * Формат:
 * <image, сдвиг в карте по X, сдвиг в карте по Y, ширина, высота>
 */
const SPRITES = {
    PALADIN: createSprite(assetMap, 0, 0),
    PALADIN_2: createSprite(assetMap, 0, 1),
    WARRIOR: createSprite(assetMap, 1, 0),
    MAGE: createSprite(assetMap, 2, 0),
    PRIEST: createSprite(assetMap, 3, 0),
    SPIRIT: createSprite(assetMap, 4, 0),
    SPIRIT_2: createSprite(assetMap, 4, 1)
};

const VARIANTS: AssetVariants = {
    NORMAL_0: {
        x: 0,
        y: 0
    },
    FLIP: {
        x: 0,
        y: 1
    },
    NORMAL_1: {
        x: 0,
        y: 2
    },
    FLIP_1: {
        x: 0,
        y: 3
    }
};

export type CharParts = keyof typeof SPRITES;

export interface CharAsset {
    type: 'CHAR';
    part: CharParts;
}

export const charSprites = createLoadPromise(assetMap, variantFactory(SPRITES, VARIANTS.NORMAL_0));

export const charAssetToSprite = async (asset: CharAsset): Promise<Sprite> => {
    const sprites = await charSprites;

    return sprites[asset.part];
};

export const charSpriteToAsset = (part: CharParts): CharAsset => ({
    type: 'CHAR',
    part
});
