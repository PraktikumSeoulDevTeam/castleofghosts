import {Middleware} from 'redux';
import {AppStoreState} from '~/store/types';
import {gameRemoveAction, gameSetLevelAction, gameSetStateAction} from '../store/Game/actions';
import type {GameActions} from '../store/Game/types';
import type {ArrowPressCallback, EmptyCallback, GameLevel, GameStatePoint} from './types';

// TODO mock
const levels: GameLevel[] = [
    {
        name: 'First',
        number: 1
    },
    {
        name: 'Second',
        number: 2
    },
    {
        name: 'Third',
        number: 3
    }
];

let charPosition = {
    x: 0,
    y: 0
};

export function createGame(): GameActions {
    // eslint-disable-next-line no-console
    console.log('[createGame]');

    return gameSetStateAction('INTERLUDE');
}

export function loadLevel(): GameActions {
    const level: GameLevel = levels.shift();
    // eslint-disable-next-line no-console
    console.log('[loadLevel]', level.name);

    return gameSetLevelAction(level);
}

export function play(): void {
    // eslint-disable-next-line no-console
    console.log('[play]');
    gameSetStateAction('GAME');
    loop();
}

export function pauseGame(): GameActions {
    // eslint-disable-next-line no-console
    console.log('[pauseGame]');

    return gameSetStateAction('PAUSE');
}

export function exitGame(): GameActions {
    // eslint-disable-next-line no-console
    console.log('[exitGame]');

    return gameRemoveAction();
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
    charPosition = {
        x: x + xV,
        y: y + yV
    };
}

let gameState: GameStatePoint = 'OFF';

function setState(newGameState: GameStatePoint): void {
    gameState = newGameState;
}

export const gameEngineMiddleware: Middleware = (store) => {
    return (next) => (action) => {
        const returnValue = next(action);
        const afterActionState: AppStoreState = store.getState();
        setState(afterActionState.game.state);

        return returnValue;
    };
};

function loop() {
    checkLimit();
    if (gameState !== 'GAME') {
        return;
    }
    requestAnimationFrame(loop);
}

function checkLimit() {
    return charPosition;
}
