import {characterSprites} from './sprites/character';
import {GRID} from './sprites/utils';
import type {Sprite} from './types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let width: number;
let height: number;

let cx: number;
let cy: number;

let fleft: number;
let ftop: number;

let character: Sprite;

export function setMainCanvas(canvasElement: HTMLCanvasElement): void {
    if (!canvasElement) {
        return;
    }
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    width = canvas.width / GRID;
    height = canvas.height / GRID;
    cx = width / 2;
    cy = height / 2;

    fleft = cx;
    ftop = cy;

    Promise.all([characterSprites]).then(([CHAR]) => {
        character = CHAR.PALADIN;
        drawImage(fleft, ftop, character);
        window.addEventListener('keydown', (e) => {
            ctx.clearRect(fleft * GRID, ftop * GRID, character.width, character.height);
            switch (e.key) {
                case 'ArrowLeft':
                    movef(-1, 0);
                    break;
                case 'ArrowRight':
                    movef(1, 0);
                    break;
                case 'ArrowUp':
                    movef(0, -1);
                    break;
                case 'ArrowDown':
                    movef(0, 1);
                    break;
                default:
            }
            drawImage(fleft, ftop, character);
        });
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

function movef(x: number, y: number) {
    fleft = (fleft + x + width) % width;
    ftop = (ftop + y + height) % height;
}
