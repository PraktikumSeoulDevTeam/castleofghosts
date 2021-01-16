import {Middleware} from 'redux';

import {gameRemoveAction, gameSetLevelAction, gameSetStateAction} from '~/store/Game/actions';

import {drawMap, hideFoundedKey} from './bg.canvas';
import {movef} from './main.canvas';
import {ROLE} from './params';
import {moves} from './spirit.canvas';

import type {ArrowPressCallback, EmptyCallback, GameLevel, GameStatePoint, GameCharacterMove, KeyInfo} from './types';
import type {GameActions} from '~/store/Game/types';
import {AppStoreState} from '~/store/types';

// TODO mock
const levels: GameLevel[] = [
    {
        name: 'First',
        number: 1
    }
];

const LEVEL_SIZE = {
    x: 31,
    y: 23
};

const charMove: GameCharacterMove = {
    posx: 0,
    posy: 0,
    needRender: false
};

const spirMove: GameCharacterMove[] = [
    {
        posx: 10,
        posy: 0,
        needRender: false
    },
    {
        posx: 20,
        posy: 19,
        needRender: false
    },
    {
        posx: 28,
        posy: 20,
        needRender: false
    }
];

let spiritInterval: number;

export function createGame(): GameActions {
    // eslint-disable-next-line no-console
    console.log('[createGame]');

    return gameSetStateAction('INTERLUDE');
}

export function loadLevel(): GameActions {
    const level: GameLevel = levels[0];
    // eslint-disable-next-line no-console
    console.log('[loadLevel]', level.name);

    return gameSetLevelAction(level);
}

export function play(): void {
    // eslint-disable-next-line no-console
    console.log('[play]');
    setCharStartPosition();
    setEndPosition();
    setKeyPosition();

    loop();
}

export function pauseGame(): void {
    // eslint-disable-next-line no-console
    console.log('[pauseGame]');
}

export function exitGame(): GameActions {
    // eslint-disable-next-line no-console
    console.log('[exitGame]');

    return gameRemoveAction();
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

let gameState: GameStatePoint = 'OFF';

function setState(newGameState: GameStatePoint): void {
    gameState = newGameState;
}

let gameCurrentLevel: Partial<GameLevel>;
function setLevel(nv: Partial<GameLevel>) {
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
    if (gameState !== 'GAME') {
        return;
    }
    spiritMove();
    keyCheck();
    characterMove();

    if (endLevelCheck() || spiritCheck()) {
        gameSetStateAction('WIN');

        return;
    }
    requestAnimationFrame(loop);
}

/*
 * Main character move
 */
function characterMove(): void {
    if (charMove.needRender && checkLimit()) {
        charMove.needRender = false;
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
 * Установки точки выхода
 * Берётся координаты двери из completeObjects
 * Если нет, то «endPoint» по-умолчанию
 */

const setEndPosition = (): void => {
    if (!gameCurrentLevel || !gameCurrentLevel.map) {
        return;
    }
    for (let a = 0; a < gameCurrentLevel.map.objects.length; a++) {
        for (let b = 0; b < gameCurrentLevel.map.objects[a].length; b++) {
            if (gameCurrentLevel.map.objects[a][b].role === ROLE.DOOR) {
                gameCurrentLevel.map.endPoint = [b, a];
                break;
            }
        }
    }
};

/**
 * Начальная установка персонажа
 */
const setCharStartPosition = (): void => {
    [charMove.posx, charMove.posy] = gameCurrentLevel.map?.startPoint || [0, 0];
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
    return gameCurrentLevel?.map?.map[newY][newX]?.canWalk || false;
}

/**
 * Проверка: персонаж столкнулся с призраком
 */

function spiritCheck(): boolean {
    return spirMove.some((spiritCoord) => spiritCoord.posx === charMove.posx && spiritCoord.posy === charMove.posy);
}

/**
 * Проверка: персонаж не добрался до конца уровня
 */
function endLevelCheck(): boolean {
    return (
        keyInfo.isFound &&
        gameCurrentLevel?.map?.endPoint[0] === charMove.posx &&
        gameCurrentLevel.map.endPoint[1] === charMove.posy
    );
}

/* Ключ */

let keyInfo: KeyInfo = {
    posX: 0,
    posY: 0,
    isFound: true
};

/**
 * Ключ: начальная установка
 */
const setKeyPosition = (): void => {
    if (!gameCurrentLevel || !gameCurrentLevel.map) {
        return;
    }
    for (let a = 0; a < gameCurrentLevel.map.objects.length; a++) {
        for (let b = 0; b < gameCurrentLevel.map.objects[a].length; b++) {
            if (gameCurrentLevel.map.objects[a][b].role === ROLE.KEY) {
                keyInfo = {
                    posX: b,
                    posY: a,
                    isFound: false
                };
                break;
            }
        }
    }
};

/**
 * Ключ: персонаж нашёл ключ
 */
const keyCheck = () => {
    if (!keyInfo.isFound && charMove.posx === keyInfo.posX && charMove.posy === keyInfo.posY) {
        keyInfo.isFound = true;
        hideFoundedKey();
        if (gameCurrentLevel.map) {
            drawMap(gameCurrentLevel.map);
        }
    }
};
/* EOF ключ */
