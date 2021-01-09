import {entries} from '~/utils';

import {GRID} from '../params';

import type {AssetMap, AssetVariant, Sprite} from './types';

/**
 * Значения указываются в условных единицах {@link GRID}
 * @param image     Изображение с картой спрайтов в виде {@link Image}
 * @param posx      Позиция по X, где находится начало спрайта
 * @param posy      Позиция по Y, где находится начало спрайта
 * @param width     Ширина спрайта
 * @param height    Высота спрайты
 */
export function createSprite(image: HTMLImageElement, posx: number, posy: number, width = 1, height = 1): Sprite {
    return {
        image,
        posx: GRID * posx,
        posy: GRID * posy,
        width: GRID * width,
        height: GRID * height
    };
}

/**
 * Добавляет нужный сдвиг для определенного варианта спрайтов
 * @param sprite    Объект со спрайтом {@link Sprite}
 * @param variant   Объект с вариантом из карты спрайтов {@link AssetVariant}
 */
export function spriteVariant(sprite: Sprite, variant: AssetVariant): Sprite {
    return {
        ...sprite,
        posx: sprite.posx + GRID * variant.x,
        posy: sprite.posy + GRID * variant.y
    };
}

/**
 * Создает набор спрайтов, соответствующего набора
 * @param sprites Набор спрайтов
 * @param variant Вариант набора спрайтов
 */
export function variantFactory<K extends string>(sprites: AssetMap<K>, variant: AssetVariant): AssetMap<K> {
    return entries(sprites).reduce((acc, [key, value]) => {
        acc[key] = spriteVariant(value, variant);

        return acc;
    }, {} as AssetMap<K>);
}

/**
 * Создает промис для обертки коллбэка загруки картинки с картой спрайтов
 * @param image     Изображение с картой спрайтов в виде {@link Image}
 * @param spriteMap Объект с именоваными спрайтами
 */
export function createLoadPromise<T>(image: HTMLImageElement, spriteMap: T): Promise<T> {
    return new Promise<T>((resolve) => {
        // eslint-disable-next-line no-param-reassign
        image.onload = () => {
            resolve(spriteMap);
        };
    });
}
