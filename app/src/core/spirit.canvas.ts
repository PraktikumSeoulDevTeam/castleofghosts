import {GRID} from './params';
import {charSprites} from './sprites/character/character';

import type {Sprite} from './sprites/types';
import {GameCharacterMove} from './types';

let canvas: HTMLCanvasElement;

let ctx: CanvasRenderingContext2D;

let pos: [number, number][] = [];

let character: Sprite[];

export function setSpiritCanvas(canvasElement: HTMLCanvasElement | null): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    Promise.all([charSprites]).then(([CHAR]) => {
        character = [CHAR.SPIRIT, CHAR.SPIRIT_2];
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

export function moves(coord: GameCharacterMove[]): void {
    stepIndex = stepIndex ? 0 : 1;

    if (!pos.length) {
        pos = Array(coord.length).fill([0, 0]);
    }
    for (let i = 0; i < coord.length; i++) {
        ctx.clearRect(pos[i][0] * GRID, pos[i][1] * GRID, character[stepIndex].width, character[stepIndex].height);
        pos[i] = [coord[i].posx, coord[i].posy];
        drawImage(pos[i][0], pos[i][1], character[stepIndex]);
    }
}
