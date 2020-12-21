import {wallSprites} from './sprites/map/wall';
import {floorSprites} from './sprites/map/floor';
import {GRID} from './sprites/utils';
import type {Sprite} from './sprites/types';
import {BackgroundType} from '../store/Level/types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

export function setBgCanvas(canvasElement: HTMLCanvasElement, level: BackgroundType[][]): void {
    if (!canvasElement) {
        return;
    }

    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // TODO
    drawMap(level);
}

export function drawMap(level: BackgroundType[][]): void {
    Promise.all([wallSprites, floorSprites]).then(([WALL, FLOOR]) => {
        for (let i = 0; i < level.length; i += 1) {
            for (let j = 0; j < level[i].length; j += 1) {
                if (level[i][j] !== null) {
                    const {part, type} = level[i][j].asset;
                    if (part === 'WALL') {
                        drawImage(j, i, WALL[type]);
                    } else {
                        drawImage(j, i, FLOOR[type]);
                    }
                }
            }
        }
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
