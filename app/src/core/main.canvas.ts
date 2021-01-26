import {GRID} from './params';
import {charSprites} from './sprites/character/character';
import {drawImage, setCanvas} from './utils';

import type {Sprite} from './sprites/types';
import type {Point} from './types';

let ctx: CanvasRenderingContext2D;

let oldPoint: Point = [0, 0];

let character: Sprite[];

let stepIndex = 0;

export async function setMainCanvas(canvasElement: HTMLCanvasElement | null): Promise<void> {
    ({ctx} = setCanvas(canvasElement));

    await Promise.all([charSprites]).then(([CHAR]) => {
        character = [CHAR.PALADIN, CHAR.PALADIN_2];
    });
}

export function movef([x, y]: Point): void {
    stepIndex = stepIndex ? 0 : 1;
    ctx.clearRect(oldPoint[0] * GRID, oldPoint[1] * GRID, GRID, GRID);
    oldPoint = [x, y];

    drawImage(ctx, x, y, character[stepIndex]);
}
