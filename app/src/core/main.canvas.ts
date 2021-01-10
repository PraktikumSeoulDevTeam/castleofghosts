import {setCanvas} from './engine';
import {GRID} from './params';
import {charSprites} from './sprites/character/character';

import type {Sprite} from './sprites/types';

let ctx: CanvasRenderingContext2D;

let width: number;
let height: number;

let cx: number;
let cy: number;

let fleft: number;
let ftop: number;

let character: Sprite;

export function setMainCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx, width, height} = setCanvas(canvasElement));
    width /= GRID;
    height /= GRID;
    cx = width / 2;
    cy = height / 2;

    fleft = cx;
    ftop = cy;

    Promise.all([charSprites]).then(([CHAR]) => {
        character = CHAR.PALADIN;
        drawImage(fleft, ftop, character);
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

export function movef(x: number, y: number): void {
    ctx.clearRect(fleft * GRID, ftop * GRID, character.width, character.height);
    fleft = (fleft + x + width) % width;
    ftop = (ftop + y + height) % height;
    drawImage(fleft, ftop, character);
}
