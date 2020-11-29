import {wallSprites} from './sprites/wall';
import {floorSprites} from './sprites/floor';
import {GRID} from './sprites/utils';
import type {Sprite} from './types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

export function setBgCanvas(canvasElement: HTMLCanvasElement): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // TODO mock
    Promise.all([wallSprites, floorSprites]).then(([WALL, FLOOR]) => {
        drawImage(21, 8, WALL.TOP);
        drawImage(20, 8, WALL.TOP);
        drawImage(19, 8, WALL.CORNER_BL);
        drawImage(19, 7, WALL.CORNER_TR);
        drawImage(18, 7, WALL.TOP);
        drawImage(17, 7, WALL.TOP);
        drawImage(16, 7, WALL.TOP);
        drawImage(15, 7, WALL.CORNER_TL);
        drawImage(15, 8, WALL.SIDE);
        drawImage(15, 9, WALL.SIDE);
        drawImage(15, 10, WALL.SIDE);
        drawImage(15, 11, WALL.CORNER_BL);
        drawImage(16, 11, WALL.TOP);
        drawImage(17, 11, WALL.TOP);
        drawImage(18, 11, WALL.TOP);
        drawImage(19, 11, WALL.CORNER_BR);
        drawImage(19, 10, WALL.CORNER_TL);
        drawImage(20, 10, WALL.TOP);
        drawImage(21, 10, WALL.TOP);
        drawImage(16, 8, FLOOR.ROOM);
        drawImage(19, 9, FLOOR.HORIZONTAL);
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
