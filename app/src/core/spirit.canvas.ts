import {GRID} from './params';
import {charSprites} from './sprites/character/character';
import {drawImage, setCanvas} from './utils';

import type {Sprite} from './sprites/types';
import type {GameCharacterMove, Point} from './types';

let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;

let coords: Point[] = [];

let character: Sprite[];

let stepIndex = 0;

export async function setSpiritCanvas(canvasElement: HTMLCanvasElement | null): Promise<void> {
    ({ctx, width, height} = setCanvas(canvasElement));

    await Promise.all([charSprites]).then(([CHAR]) => {
        character = [CHAR.SPIRIT, CHAR.SPIRIT_2];
    });
}

export function resetSpiritCoords(spirits: GameCharacterMove[]): void {
    ctx.clearRect(0, 0, width, height);
    coords = spirits.map((spirit) => spirit.point);
}

export function moves(spirits: GameCharacterMove[]): void {
    stepIndex = stepIndex ? 0 : 1;

    for (let i = 0; i < spirits.length; i++) {
        const [x, y] = spirits[i].point;
        const [oldx, oldy] = coords[i];
        ctx.clearRect(oldx * GRID, oldy * GRID, GRID, GRID);
        coords[i] = [x, y];
        drawImage(ctx, x, y, character[stepIndex]);
    }
}
