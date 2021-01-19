import {drawMap, clearMap, renderDoor, setKeyIsFound} from './bg.canvas';
import {movef} from './main.canvas';
import {MOB_SPEED} from './params';
import {moves, resetSpiritCoords} from './spirit.canvas';

import type {ArrowPressCallback, EmptyCallback, GameCharacterMove, Level, Point} from './types';

const LEVEL_SIZE = {
    x: 31,
    y: 23
};

const player: GameCharacterMove = {
    point: [0, 0],
    needRender: false
};

let currentGameLevel: Level;

let keyIsFound = false;

let spirits: GameCharacterMove[] = [];
let spiritInterval: number;

let nextLevelCb: EmptyCallback | null = null;
let looseCb: EmptyCallback | null = null;

let loopStopId: number;

export function createGame(): void {
    // eslint-disable-next-line no-console
    console.log('[Game create]');
}

export function loadLevel(level: Level): void {
    // eslint-disable-next-line no-console
    console.log('[Game loadLevel]');
    currentGameLevel = level;
    resetGameParams(level);
    clearMap();
    drawMap(level);
}

export function playGame(): void {
    // eslint-disable-next-line no-console
    console.log('[Game play]');
    spiritInterval = window.setInterval(spiritTick, MOB_SPEED);
    loop();
}

export function pauseGame(): void {
    // eslint-disable-next-line no-console
    console.log('[Game pause]');
    window.clearInterval(spiritInterval);
    stopLoop();
}

export function endLevel(): void {
    pauseGame();
    // eslint-disable-next-line no-console
    console.log('[Game endLevel]');
}

export function exitGame(): void {
    endLevel();
    // eslint-disable-next-line no-console
    console.log('[Game exit]');
}

/**
 * Сбрасываем игровые настройки к INIT состоянию
 */
function resetGameParams(level: Level): void {
    player.point = [...level.startPoint];
    player.needRender = true;

    keyIsFound = false;

    spirits = [
        {
            point: [1, 12],
            needRender: false
        },
        {
            point: [10, 4],
            needRender: false
        },
        {
            point: [11, 20],
            needRender: false
        }
    ];
    resetSpiritCoords(spirits);
}

export function registerStateChanges(next: EmptyCallback, loose: EmptyCallback): void {
    nextLevelCb = next;
    looseCb = loose;
}

function gameLoose() {
    if (looseCb) {
        looseCb();
    }
}

function changeLevel() {
    if (nextLevelCb) {
        nextLevelCb();
    }
}

function stopLoop() {
    if (loopStopId) {
        cancelAnimationFrame(loopStopId);
    }
}

export function createPauseListener(cb: EmptyCallback): EmptyCallback {
    const handler = createEscapeHandler(cb);
    window.addEventListener('keydown', handler);

    return () => {
        window.removeEventListener('keydown', handler);
    };
}

export function createGameListener(cbEscape: EmptyCallback): EmptyCallback {
    const escapeHandler = createEscapeHandler(cbEscape);
    const arrowHandler = createArrowsHandler(move);
    window.addEventListener('keydown', escapeHandler);
    window.addEventListener('keydown', arrowHandler);

    return () => {
        window.removeEventListener('keydown', escapeHandler);
        window.removeEventListener('keydown', arrowHandler);
    };
}

export function createEscapeHandler(cb: EmptyCallback) {
    return (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            cb();
        }
    };
}

function createArrowsHandler(cb: ArrowPressCallback) {
    return (e: KeyboardEvent): void => {
        switch (e.key) {
            case 'ArrowLeft':
                cb(-1, 0);
                break;
            case 'ArrowRight':
                cb(1, 0);
                break;
            case 'ArrowUp':
                cb(0, -1);
                break;
            case 'ArrowDown':
                cb(0, 1);
                break;
            default:
        }
    };
}

export function move(x: number, y: number): void {
    if (checkWalls(player.point[0] + x, player.point[1] + y)) {
        player.point[0] += x;
        player.point[1] += y;
        player.needRender = true;
    }
}

function loop(): void {
    loopStopId = requestAnimationFrame(loop);

    characterMove();
    keyCheck();
    if (endLevelCheck()) {
        changeLevel();
    }
    if (spiritCheck()) {
        gameLoose();
    }
    spiritMove();
}

/**
 * Main character move
 */
function characterMove(): void {
    if (player.needRender) {
        player.needRender = false;
        drawMap(currentGameLevel, player.point);
        movef(player.point);
    }
}

function spiritTick(): void {
    spirits[0].needRender = true;
}

/**
 * Spirit move by Canvas
 */
function spiritMove(): void {
    if (spirits[0].needRender) {
        spirits[0].needRender = false;
        spiritChangePosition();
        moves(spirits);
    }
}

const moveDelta: Point[] = [
    [1, 1],
    [1, -1],
    [-1, 1]
];

function spiritChangePosition(): void {
    for (let i = 0; i < spirits.length; i++) {
        let [x, y] = spirits[i].point;
        let [dx, dy] = moveDelta[i];
        x += dx;
        y += dy;
        if (x === LEVEL_SIZE.x || x === 0) {
            dx = -dx;
        }
        if (y === LEVEL_SIZE.y || y === 0) {
            dy = -dy;
        }
        spirits[i].point = [x, y];
        moveDelta[i] = [dx, dy];
    }
}

/**
 * Проверка: персонаж не наскочил на стену
 */
function checkWalls(newX: number, newY: number): boolean {
    return currentGameLevel.map[newY][newX]?.canWalk || false;
}

/**
 * Проверка: персонаж столкнулся с призраком
 */
function spiritCheck(): boolean {
    return spirits.some((spirit) => isSamePoint(player.point, spirit.point));
}

/**
 * Проверка: персонаж добрался до конца уровня
 */
function endLevelCheck(): boolean {
    return keyIsFound && isSamePoint(player.point, currentGameLevel.endPoint);
}

/**
 * Ключ: персонаж нашёл ключ
 */
function keyCheck() {
    if (!keyIsFound && isSamePoint(player.point, currentGameLevel.keyPoint)) {
        keyIsFound = true;
        setKeyIsFound();
        renderDoor(currentGameLevel.endPoint);
    }
}

const isSamePoint = (aPoint: Point, bPoint: Point): boolean => aPoint[0] === bPoint[0] && aPoint[1] === bPoint[1];
