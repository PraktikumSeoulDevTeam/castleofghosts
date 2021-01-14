import {GRID} from './params';
import {charSprites} from './sprites/character/character';

import type {Sprite} from './sprites/types';

let canvas: HTMLCanvasElement;

let ctx: CanvasRenderingContext2D;

let fleft: number;
let ftop: number;

let character: Sprite[];

export function setSpiritCanvas(canvasElement: HTMLCanvasElement | null): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    fleft = 0;
    ftop = 0;

    Promise.all([charSprites]).then(([CHAR]) => {
        character = [CHAR.SPIRIT, CHAR.SPIRIT_2];
        drawImage(fleft, ftop, character[0]);
    });
}

function drawImage(x: number, y: number, sprite: Sprite) {
    if (sprite.image) {
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

export function moves(x: number, y: number): void {
    stepIndex = stepIndex ? 0 : 1;
    ctx.clearRect(fleft * GRID, ftop * GRID, character[stepIndex].width, character[stepIndex].height);
    fleft = x;
    ftop = y;
    drawImage(fleft, ftop, character[stepIndex]);
}
