import {GRID} from './params';

import type {Sprite} from './sprites/types';
import type {CanvasContext} from './types';

/**
 * Создает контекст для canvas HTML элемента
 * @param canvasElement HTML элемент канваса в DOM
 */
export function setCanvas(canvasElement: HTMLCanvasElement | null): CanvasContext | never {
    if (!canvasElement) {
        throw new Error('No canvas found');
    }
    const ctx = canvasElement.getContext('2d');
    if (!ctx) {
        throw new Error('No canvas context found');
    }
    ctx.imageSmoothingEnabled = false;

    return {
        ctx,
        width: canvasElement.width,
        height: canvasElement.height
    };
}

export function drawImage(ctx: CanvasRenderingContext2D, x: number, y: number, sprite: Sprite): void {
    if (sprite && sprite.image) {
        ctx.drawImage(
            sprite.image,
            sprite.posx,
            sprite.posy,
            sprite.width,
            sprite.height,
            GRID * x,
            GRID * y,
            sprite.width,
            sprite.height
        );
    }
}
