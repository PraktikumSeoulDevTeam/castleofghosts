import {floorSprites} from '~/core/sprites/map';

import {setCanvas} from './engine';
import {GRID} from './params';
import {charSprites} from './sprites/character/character';
import {FloorParts} from './sprites/map/floor';
import {WallParts, wallSprites} from './sprites/map/wall';
import {objectSprites} from './sprites/object';

import type {AssetMap, Sprite} from './sprites/types';
import type {BackgroundMap, Level, Point} from '~/core/types';

let ctx: CanvasRenderingContext2D;

export function setBgCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx} = setCanvas(canvasElement));
}

export function drawMap(fullLevel: Level): void {
    // render map
    Promise.all([wallSprites, floorSprites, objectSprites, charSprites]).then(([WALL, FLOOR, OBJECTS]) => {
        drawBackground(fullLevel.map, {
            floor: FLOOR,
            wall: WALL
        });

        drawSpriteInPoint(fullLevel.keyPoint, OBJECTS.KEY);

        drawSpriteInPoint(fullLevel.endPoint, OBJECTS.DOOR);
    });
}

function drawBackground(
    level: BackgroundMap,
    sprites: {
        wall: AssetMap<WallParts>;
        floor: AssetMap<FloorParts>;
    }
): void {
    const WALL = sprites.wall;
    const FLOOR = sprites.floor;

    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            const {asset: backgroundAsset} = level[i][j];
            if (backgroundAsset) {
                if (backgroundAsset.type === 'WALL') {
                    drawImage(j, i, WALL[backgroundAsset.part]);
                } else {
                    drawImage(j, i, FLOOR[backgroundAsset.part]);
                }
            }
        }
    }
}

function drawSpriteInPoint(point: Point, sprite: Sprite) {
    drawImage(point[0], point[1], sprite);
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
