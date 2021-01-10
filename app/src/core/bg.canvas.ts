import {floorSprites} from '~/core/sprites/map';

import {setCanvas} from './engine';
import {GRID} from './params';
import {wallSprites} from './sprites/map/wall';

import type {Sprite} from './sprites/types';
import type {BackgroundMap} from '~/store/Level/types';

let ctx: CanvasRenderingContext2D;

export function setBgCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx} = setCanvas(canvasElement));
}

export function drawMap(level: BackgroundMap): void {
    Promise.all([wallSprites, floorSprites]).then(([WALL, FLOOR]) => {
        for (let i = 0; i < level.length; i += 1) {
            for (let j = 0; j < level[i].length; j += 1) {
                const {asset} = level[i][j];
                if (asset) {
                    if (asset.type === 'WALL') {
                        drawImage(j, i, WALL[asset.part]);
                    } else {
                        drawImage(j, i, FLOOR[asset.part]);
                    }
                }
            }
        }
    });
}

function drawImage(x: number, y: number, sprite: Sprite) {
    if (sprite && sprite.image) {
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
