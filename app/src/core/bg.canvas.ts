import {floorSprites} from '~/core/sprites/map';

import {FloorParts} from './sprites/map/floor';
import {WallParts, wallSprites} from './sprites/map/wall';
import {ObjectParts, objectSprites} from './sprites/object';
import {drawImage, setCanvas} from './utils';

import type {AssetMap, Sprite} from './sprites/types';
import type {Level, Point} from '~/core/types';

let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;

let WALL: AssetMap<WallParts>;
let FLOOR: AssetMap<FloorParts>;
let OBJECTS: AssetMap<ObjectParts>;

let doorIsFound = false;

let keyIsFound = false;

export function setKeyIsFound(): void {
    keyIsFound = true;
}

export async function setBgCanvas(canvasElement: HTMLCanvasElement | null): Promise<void> {
    ({ctx, width, height} = setCanvas(canvasElement));

    await Promise.all([wallSprites, floorSprites, objectSprites]).then((sprites) => {
        [WALL, FLOOR, OBJECTS] = sprites;
    });
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
    doorIsFound = false;
    keyIsFound = false;
    ctx.clearRect(0, 0, width, height);
}

export function drawMap(level: Level, position?: Point): void {
    const pattern = getRenderPattern(position || level.startPoint);

    pattern.forEach(([x, y]) => {
        // Граница карты
        if (x < 0 || y < 0 || y >= level.map.length || x >= level.map[0].length) {
            return;
        }
        const {asset: backgroundAsset} = level.map[y][x];
        if (backgroundAsset) {
            if (backgroundAsset.type === 'WALL') {
                drawImage(ctx, x, y, WALL[backgroundAsset.part]);
            } else {
                drawImage(ctx, x, y, FLOOR[backgroundAsset.part]);
            }
        }

        if (!keyIsFound && x === level.keyPoint[0] && y === level.keyPoint[1]) {
            drawSpriteInPoint(level.keyPoint, OBJECTS.KEY);
        }
        if (x === level.endPoint[0] && y === level.endPoint[1]) {
            doorIsFound = true;
            renderDoor(level.endPoint);
        }
    });
}

export function renderDoor(point: Point): void {
    if (doorIsFound) {
        const doorSprite = keyIsFound ? OBJECTS.DOOR_OPEN : OBJECTS.DOOR;
        drawSpriteInPoint(point, doorSprite);
    }
}

function drawSpriteInPoint([x, y]: Point, sprite: Sprite) {
    drawImage(ctx, x, y, sprite);
}
