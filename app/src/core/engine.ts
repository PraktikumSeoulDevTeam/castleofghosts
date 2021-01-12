import {Middleware} from 'redux';

import {gameRemoveAction, gameSetLevelAction, gameSetStateAction} from '~/store/Game/actions';

import {movef} from './main.canvas';

import type {
    ArrowPressCallback,
    EmptyCallback,
    GameLevel,
    GameStatePoint,
    GameCharacterMove,
    CanvasContext
} from './types';
import type {GameActions} from '~/store/Game/types';
import {Level} from '~/store/Level/types';
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
    [charMove.posx, charMove.posy] = gameCurrentLevel.startPoint;
    charMove.needRender = true;
    characterMove();
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

export function setCanvas(canvasElement: HTMLCanvasElement | null): CanvasContext | never {
    if (!canvasElement) {
        throw new Error('No canvas found');
    }
    const ctx = canvasElement.getContext('2d');
    if (!ctx) {
        throw new Error('No canvas context found');
    }
    ctx.imageSmoothingEnabled = false;

    return {
        ctx,
        width: canvasElement.width,
        height: canvasElement.height
    };
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
    charMove.posx += x;
    charMove.posy += y;
    charMove.needRender = true;
}

let gameState: GameStatePoint = 'OFF';

function setState(newGameState: GameStatePoint): void {
    gameState = newGameState;
}

let gameLevels: Level[] = [];
function setLevels(newLevels: Level[]) {
    gameLevels = newLevels;
}

let gameCurrentLevel: Level;
function setLevel(index: number) {
    gameCurrentLevel = gameLevels[index];
}

export const gameEngineMiddleware: Middleware = (store) => (next) => (action) => {
    const returnValue = next(action);
    const afterActionState: AppStoreState = store.getState();
    setState(afterActionState.game.state);
    setLevels(afterActionState.level.levels);
    setLevel(afterActionState.game.level.number || 1);

    return returnValue;
};

function loop(): void {
    if (gameState !== 'GAME') {
        return;
    }
    characterMove();
    interactionCheck();
    if (endLevelCheck()) {
        gameSetStateAction('END');

        return;
    }
    requestAnimationFrame(loop);
}

function characterMove(): void {
    if (charMove.needRender && checkLimit()) {
        charMove.needRender = false;
        movef(charMove.posx, charMove.posy);
    }
}

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
 * Проверка: персонаж не столкнулся с другими объектами
 */
function interactionCheck(): boolean {
    return true;
}

/**
 * Проверка: персонаж не добрался до конца уровня
 */
function endLevelCheck(): boolean {
    return gameCurrentLevel.endPoint[0] === charMove.posx && gameCurrentLevel.endPoint[1] === charMove.posy;
}
