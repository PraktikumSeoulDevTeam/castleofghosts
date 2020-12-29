import {createLoadPromise, createSprite, variantFactory} from '../utils';
import type {AssetVariants} from '../types';
import {Floor} from './types';

const assetMap: HTMLImageElement = new Image();
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

// TODO на данный момент жестко зашит вариант. Возможна реализация с изменением в рантайме
export const floorSprites: Promise<Floor> = createLoadPromise(assetMap, variantFactory(SPRITES, VARIANTS.BRICK_1));
