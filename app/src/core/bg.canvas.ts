import {floorSprites} from '~/core/sprites/map';

import {GRID} from './params';
import {charSprites} from './sprites/character/character';
import {FloorParts} from './sprites/map/floor';
import {WallParts, wallSprites} from './sprites/map/wall';
import {ObjectParts, objectSprites} from './sprites/object';
import {setCanvas} from './utils';

import type {AssetMap, Sprite} from './sprites/types';
import type {Level, Point} from '~/core/types';

let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;

export function setBgCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx, width, height} = setCanvas(canvasElement));
}

function getRenderPattern([x, y]: Point): Point[] {
    return [
        [x, y],

        [x - 2, y],
        [x - 1, y],
        [x, y + 2],
        [x, y + 1],
        [x + 2, y],
        [x + 1, y],
        [x, y - 2],
        [x, y - 1],

        [x - 1, y + 1],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y - 1]
    ];
}

export function clearMap(): void {
    ctx.clearRect(0, 0, width, height);
}

export function drawMap(fullLevel: Level, position?: Point): void {
    // render map
    Promise.all([wallSprites, floorSprites, objectSprites, charSprites]).then(([WALL, FLOOR, OBJECTS]) => {
        redraw(
            fullLevel,
            {
                floor: FLOOR,
                wall: WALL,
                objects: OBJECTS
            },
            position || fullLevel.startPoint
        );
    });
}

function redraw(
    level: Level,
    sprites: {
        wall: AssetMap<WallParts>;
        floor: AssetMap<FloorParts>;
        objects: AssetMap<ObjectParts>;
    },
    position: Point
): void {
    const WALL = sprites.wall;
    const FLOOR = sprites.floor;
    const OBJECTS = sprites.objects;
    const pattern = getRenderPattern(position);

    pattern.forEach(([x, y]) => {
        // Граница карты
        if (x < 0 || y < 0 || y >= level.map.length || x >= level.map[0].length) {
            return;
        }
        const {asset: backgroundAsset} = level.map[y][x];
        if (backgroundAsset) {
            if (backgroundAsset.type === 'WALL') {
                drawImage(x, y, WALL[backgroundAsset.part]);
            } else {
                drawImage(x, y, FLOOR[backgroundAsset.part]);
            }
        }

        if (x === level.keyPoint[0] && y === level.keyPoint[1]) {
            drawSpriteInPoint(level.keyPoint, OBJECTS.KEY);
        }
        if (x === level.endPoint[0] && y === level.endPoint[1]) {
            drawSpriteInPoint(level.endPoint, OBJECTS.DOOR);
        }
    });
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
