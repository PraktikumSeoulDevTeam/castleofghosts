import {createLoadPromise, createSprite} from './utils';

const assetMap: HTMLImageElement = new Image();
assetMap.src = './assets/char.png';

/**
 * Создание карты спрайтов из изображения. В качестве значений, шаги размером {@link GRID}
 * Формат:
 * <image, сдвиг в карте по X, сдвиг в карте по Y, ширина, высота>
 */
const SPRITES = {
    PALADIN: createSprite(assetMap, 0, 0),
    WARRIOR: createSprite(assetMap, 1, 0),
    MAGE: createSprite(assetMap, 2, 0),
    PRIEST: createSprite(assetMap, 3, 0)
};

export const characterSprites = createLoadPromise(assetMap, SPRITES);
