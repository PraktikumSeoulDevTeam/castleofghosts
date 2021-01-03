import {floorSprites} from '~/core/sprites/map';

import {setCanvas} from './engine';
import {wallSprites} from './sprites/map/wall';
import {GRID} from './sprites/utils';

import type {Sprite} from './sprites/types';
import {BackgroundMap} from '~/store/Level/types';

let ctx: CanvasRenderingContext2D;

export function setBgCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx} = setCanvas(canvasElement));
}

export function drawMap(level: BackgroundMap): void {
    Promise.all([wallSprites, floorSprites]).then(([WALL, FLOOR]) => {
        for (let i = 0; i < level.length; i += 1) {
            for (let j = 0; j < level[i].length; j += 1) {
                if (level[i][j] !== null) {
                    const part = level[i][j].asset?.part;
                    const type = level[i][j].asset?.type;

                    if (!type || !part) {
                        continue;
                    }

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
