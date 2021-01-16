import {floorSprites} from '~/core/sprites/map';

import {setCanvas} from './factory.canvas';
import {GRID} from './params';
import {CharParts, charSprites} from './sprites/character/character';
import {FloorParts} from './sprites/map/floor';
import {WallParts, wallSprites} from './sprites/map/wall';
import {ObjectParts, objectSprites} from './sprites/object';

import type {AssetMap, Sprite} from './sprites/types';
import type {BackgroundMap, CharsMap, Level, ObjectsMap} from '~/store/Level/types';

let ctx: CanvasRenderingContext2D;
let keyIsHide = false;

export function hideFoundedKey(): void {
    keyIsHide = true;
}

export function setBgCanvas(canvasElement: HTMLCanvasElement | null): void {
    ({ctx} = setCanvas(canvasElement));
}

export function drawMap(fullLevel: Level): void {
    // render map
    Promise.all([wallSprites, floorSprites, objectSprites, charSprites]).then(([WALL, FLOOR, OBJECTS, CHARS]) => {
        drawBackground(fullLevel.map, {
            floor: FLOOR,
            wall: WALL
        });

        drawObjects(fullLevel.objects, {
            objects: OBJECTS
        });

        drawChars(fullLevel.chars, {
            chars: CHARS
        });
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

function drawObjects(
    objects: ObjectsMap,
    sprites: {
        objects: AssetMap<ObjectParts>;
    }
): void {
    const OBJECTS = sprites.objects;

    for (let i = 0; i < objects.length; i += 1) {
        for (let j = 0; j < objects[i].length; j += 1) {
            const {asset: objectAsset} = objects[i][j];
            if (objectAsset) {
                switch (objectAsset.part) {
                    case 'DOOR': {
                        if (!keyIsHide) {
                            drawImage(j, i, OBJECTS.DOOR);
                        } else {
                            drawImage(j, i, OBJECTS.DOOR_OPEN);
                        }
                        break;
                    }
                    case 'KEY': {
                        if (!keyIsHide) {
                            drawImage(j, i, OBJECTS.KEY);
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    }
}

function drawChars(
    chars: CharsMap,
    sprites: {
        chars: AssetMap<CharParts>;
    }
): void {
    const CHARS = sprites.chars;

    for (let i = 0; i < chars.length; i += 1) {
        for (let j = 0; j < chars[i].length; j += 1) {
            const {asset: charAsset} = chars[i][j];
            if (charAsset) {
                switch (charAsset.part) {
                    case 'SPIRIT': {
                        drawImage(j, i, CHARS[charAsset.part]);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }
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
