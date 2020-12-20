import {characterSprites} from './sprites/character';
import {GRID} from './sprites/utils';
import type {Sprite} from './types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let fleft: number;
let ftop: number;

let character: Sprite;

export function setMainCanvas(canvasElement: HTMLCanvasElement): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    fleft = 0;
    ftop = 0;

    Promise.all([characterSprites]).then(([CHAR]) => {
        character = CHAR.PALADIN;
        drawImage(fleft, ftop, character);
    });
}

function drawImage(x: number, y: number, sprite: Sprite) {
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

export function movef(x: number, y: number): void {
    ctx.clearRect(fleft * GRID, ftop * GRID, character.width, character.height);
    fleft = x;
    ftop = y;
    drawImage(fleft, ftop, character);
}
