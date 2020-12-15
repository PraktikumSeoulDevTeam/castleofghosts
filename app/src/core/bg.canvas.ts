import {wallSprites} from './sprites/wall';
import {floorSprites} from './sprites/floor';
import {GRID} from './sprites/utils';
import type {Sprite} from './types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

function levelOptimizer(level: number[][]): number[][] {
    const exist = (arr, i, j): boolean => arr[i][j] !== undefined;
    const copyLevel = [...level];

    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            const res = level[i][j];

            if (res === 1) {
            } else {
            }
        }
    }

    return copyLevel;
}

function mapToBg(res: number, WALL, FLOOR) {
    switch (res) {
        case 0:
            return FLOOR.SINGLE;
        case 10:
            return WALL.TOP;
        case 11:
            return WALL.SIDE;
        case 12:
            return WALL.CORNER_TL;
        case 13:
            return WALL.CORNER_TR;
        case 14:
            return WALL.CORNER_BR;
        case 15:
            return WALL.CORNER_BL;
        default:
            return WALL.TOP;
    }
}

export function setBgCanvas(canvasElement: HTMLCanvasElement, level: number[][]): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const optimizedLevel = levelOptimizer(level);

    // TODO mock
    Promise.all([wallSprites, floorSprites]).then(([WALL, FLOOR]) => {
        WALL.
        for (let i = 0; i < optimizedLevel.length; i += 1) {
            for (let j = 0; j < optimizedLevel[i].length; j += 1) {
                drawImage(j, i, mapToBg(optimizedLevel[i][j], WALL, FLOOR));
            }
        }
        /*
        drawImage(0, 0, WALL.TOP);
        drawImage(0, 1, WALL.TOP);
        drawImage(0, 2, WALL.TOP);
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
        */
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
