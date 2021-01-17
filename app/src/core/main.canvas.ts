import {GRID} from './params';
import {charSprites} from './sprites/character/character';

import type {Sprite} from './sprites/types';

let canvas: HTMLCanvasElement;

let ctx: CanvasRenderingContext2D | null;

let fleft: number;
let ftop: number;

let character: Sprite[];

export function setMainCanvas(canvasElement: HTMLCanvasElement | null): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');

    if (!ctx) {
        return;
    }

    ctx.imageSmoothingEnabled = false;

    fleft = 0;
    ftop = 0;

    Promise.all([charSprites]).then(([CHAR]) => {
        character = [CHAR.PALADIN, CHAR.PALADIN_2];
        drawImage(fleft, ftop, character[0]);
    });
}

function drawImage(x: number, y: number, sprite: Sprite) {
    if (sprite.image && ctx) {
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

let stepIndex = 0;

export function movef(x: number, y: number): void {
    if (!ctx) {
        return;
    }

    stepIndex = stepIndex ? 0 : 1;
    ctx.clearRect(fleft * GRID, ftop * GRID, character[stepIndex].width, character[stepIndex].height);
    fleft = x;
    ftop = y;

    drawImage(fleft, ftop, character[stepIndex]);
}
