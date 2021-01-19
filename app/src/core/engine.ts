import {Middleware} from 'redux';

import {drawMap, clearMap, reRenderOpenDoor, setKeyIsFound, setKeyIsNotFound} from './bg.canvas';
import {movef} from './main.canvas';
import {STATE} from './params';
import {moves} from './spirit.canvas';

import type {ArrowPressCallback, EmptyCallback, GameCharacterMove, GameStatePoint, Level, Point} from './types';
import type {AppStoreState} from '~/store/types';

const LEVEL_SIZE = {
    x: 31,
    y: 23
};

/* Ключ */
let keyIsFound = false;
const charMove: GameCharacterMove = {
    posx: -1,
    posy: -1,
    needRender: false
};

let spirMove: GameCharacterMove[] = [];
let spiritInterval: number;

let nextLevelCb: EmptyCallback | null = null;
let looseCb: EmptyCallback | null = null;

/**
 * Сбрасываем игровые настройки к INIT состоянию
 */
export function resetGameParams(): void {
    [charMove.posx, charMove.posy] = [-1, -1];
    charMove.needRender = true;
    keyIsFound = false;

    spirMove = [
        {
            posx: 1,
            posy: 12,
            needRender: false
        },
        {
            posx: 10,
            posy: 4,
            needRender: false
        },
        {
            posx: 11,
            posy: 20,
            needRender: false
        }
    ];

    setKeyIsNotFound();
}

export function createGame(): void {
    resetGameParams();
    // eslint-disable-next-line no-console
    console.log('[createGame]');
}

let currentGameLevel: Level;

export function loadLevel(level: Level): void {
    clearMap();
    drawMap(level);
    currentGameLevel = level;
    // eslint-disable-next-line no-console
    console.log('[loadLevel]');
}

export function play(): void {
    // eslint-disable-next-line no-console
    console.log('[play]');
    clearMap();
    setCharStartPosition();
    loop();
}

export function pauseGame(): void {
    // eslint-disable-next-line no-console
    console.log('[pauseGame]');
}

export function exitGame(): void {
    // eslint-disable-next-line no-console
    console.log('[exitGame]');
}

export function registerStateChanges(next: EmptyCallback, loose: EmptyCallback): void {
    nextLevelCb = next;
    looseCb = loose;
}

function gameLoose() {
    setState(STATE.LOOSE);
    if (looseCb) {
        looseCb();
    }
}

function changeLevel() {
    setState(STATE.INTERLUDE);
    if (nextLevelCb) {
        nextLevelCb();
    }
}

export function createPauseListener(cb: EmptyCallback): EmptyCallback {
    const handler = createEscapeHandler(cb);
    window.addEventListener('keydown', handler);
    spiritInterval = window.setInterval(spiritTick, 1000);

    return () => {
        window.removeEventListener('keydown', handler);
        window.clearInterval(spiritInterval);
    };
}

export function createGameListener(cbEscape: EmptyCallback): EmptyCallback {
    const escapeHandler = createEscapeHandler(cbEscape);
    const arrowHandler = createArrowsHandler(move);
    window.addEventListener('keydown', escapeHandler);
    window.addEventListener('keydown', arrowHandler);
    spiritInterval = window.setInterval(spiritTick, 150);

    return () => {
        window.removeEventListener('keydown', escapeHandler);
        window.removeEventListener('keydown', arrowHandler);
        window.clearInterval(spiritInterval);
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
    if (checkWalls(charMove.posx + x, charMove.posy + y)) {
        charMove.posx += x;
        charMove.posy += y;
        charMove.needRender = true;
    }
}

let gameState: GameStatePoint = STATE.OFF;

function setState(newGameState: GameStatePoint): void {
    gameState = newGameState;
}

let gameCurrentLevel: Partial<Level>;
function setLevel(nv: Partial<Level>) {
    gameCurrentLevel = nv;
}

export const gameEngineMiddleware: Middleware = (store) => (next) => (action) => {
    const returnValue = next(action);
    const afterActionState: AppStoreState = store.getState();
    setState(afterActionState.game.state);
    if (afterActionState.game.level) {
        setLevel(afterActionState.game.level);
    }

    return returnValue;
};

function loop(): void {
    if (gameState !== STATE.GAME) {
        return;
    }
    spiritMove();
    keyCheck();
    characterMove();

    if (endLevelCheck()) {
        changeLevel();
    }
    if (spiritCheck()) {
        gameLoose();
    }

    requestAnimationFrame(loop);
}

/*
 * Main character move
 */
function characterMove(): void {
    if (charMove.needRender && checkLimit()) {
        charMove.needRender = false;
        if (currentGameLevel) {
            drawMap(currentGameLevel, [charMove.posx, charMove.posy]);
        }
        movef(charMove.posx, charMove.posy);
    }
}

function spiritTick(): void {
    spirMove[0].needRender = true;
}
/*
 * Spirit move by Canvas
 */
function spiritMove(): void {
    if (spirMove[0].needRender) {
        spiritChangePosition();
        spirMove[0].needRender = false;
        moves(spirMove);
    }
}

/*
 *
 */
const spirDiff: [number, number][] = [
    [1, 1],
    [1, -1],
    [-1, 1]
];
function spiritChangePosition(): void {
    for (let i = 0; i < spirMove.length; i++) {
        spirMove[i].posx += spirDiff[i][0];
        spirMove[i].posy += spirDiff[i][1];
        if (spirMove[i].posx === LEVEL_SIZE.x || spirMove[i].posx === 0) {
            spirDiff[i][0] = spirDiff[i][0] === -1 ? 1 : -1;
        }
        if (spirMove[i].posy === LEVEL_SIZE.y || spirMove[i].posy === 0) {
            spirDiff[i][1] = spirDiff[i][1] === -1 ? 1 : -1;
        }
    }
}

/**
 * Начальная установка персонажа
 */
const setCharStartPosition = (): void => {
    if (charMove.posx < 0 || charMove.posy < 0) {
        [charMove.posx, charMove.posy] = gameCurrentLevel.startPoint || [0, 0];
    }

    charMove.needRender = true;
    characterMove();
};

/**
 * Проверка: персонаж не вышел за пределы экрана
 */
function checkLimit(): boolean {
    if (charMove.posx < 0) {
        charMove.posx = 0;

        return false;
    }
    if (charMove.posx > LEVEL_SIZE.x) {
        charMove.posx = LEVEL_SIZE.x;

        return false;
    }
    if (charMove.posy < 0) {
        charMove.posy = 0;

        return false;
    }
    if (charMove.posy > LEVEL_SIZE.y) {
        charMove.posy = LEVEL_SIZE.y;

        return false;
    }

    return true;
}

/**
 * Проверка: персонаж не наскочил на стену
 */
function checkWalls(newX: number, newY: number): boolean {
    return gameCurrentLevel?.map?.[newY][newX]?.canWalk || false;
}

/**
 * Проверка: персонаж столкнулся с призраком
 */

function spiritCheck(): boolean {
    return spirMove.some((spiritCoord) => spiritCoord.posx === charMove.posx && spiritCoord.posy === charMove.posy);
}

/**
 * Проверка: персонаж добрался до конца уровня
 */
function endLevelCheck(): boolean {
    return (
        !!gameCurrentLevel.endPoint &&
        keyIsFound &&
        gameCurrentLevel.endPoint[0] === charMove.posx &&
        gameCurrentLevel.endPoint[1] === charMove.posy
    );
}

/**
 * Ключ: персонаж нашёл ключ
 */
const keyCheck = () => {
    if (
        gameCurrentLevel.keyPoint &&
        !keyIsFound &&
        charMove.posx === gameCurrentLevel.keyPoint[0] &&
        charMove.posy === gameCurrentLevel.keyPoint[1]
    ) {
        keyIsFound = true;
        setKeyIsFound();
        const pos: Point = [currentGameLevel.endPoint[1], currentGameLevel.endPoint[0]];
        reRenderOpenDoor(gameCurrentLevel as Level, pos);
    }
};
/* EOF ключ */
