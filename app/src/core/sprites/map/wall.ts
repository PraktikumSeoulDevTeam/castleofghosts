import {createLoadPromise, createSprite, variantFactory} from '../utils';

import type {AssetMap, AssetVariants} from '../types';

const assetMap: HTMLImageElement = new Image();
assetMap.src = './assets/wall.png';

/**
 * Создание карты спрайтов из изображения. В качестве значений, шаги размером {@link GRID}
 * Формат:
 * <image, сдвиг в карте по X, сдвиг в карте по Y, ширина, высота>
 */
const SPRITES: AssetMap = {
    CORNER_TL: createSprite(assetMap, 0, 0),
    CORNER_TR: createSprite(assetMap, 2, 0),
    CORNER_BL: createSprite(assetMap, 0, 2),
    CORNER_BR: createSprite(assetMap, 2, 2),
    TOP: createSprite(assetMap, 1, 0),
    SIDE: createSprite(assetMap, 0, 1),
    LEDGE: createSprite(assetMap, 1, 1),
    CROSS_TOP: createSprite(assetMap, 4, 0),
    CROSS_BOTTOM: createSprite(assetMap, 4, 2),
    CROSS_LEFT: createSprite(assetMap, 3, 1),
    CROSS_RIGHT: createSprite(assetMap, 5, 1),
    CROSS: createSprite(assetMap, 4, 1),
    FILL: createSprite(assetMap, 3, 0)
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
    },
    BRICK_5: {
        x: 0,
        y: 15
    },
    BRICK_6: {
        x: 0,
        y: 18
    },
    BRICK_7: {
        x: 0,
        y: 21
    },
    BRICK_8: {
        x: 0,
        y: 24
    }
};

// TODO на данный момент жестко зашит вариант. Возможна реализация с изменением в рантайме
export const wallSprites = createLoadPromise(assetMap, variantFactory(SPRITES, VARIANTS.BRICK_3));
