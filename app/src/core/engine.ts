import {gameRemoveAction, gameSetLevelAction, gameSetStateAction} from '../store/Game/actions';
import type {ArrowPressCallback, EmptyCallback, GameLevel} from './types';
import type {GameActions} from '../store/Game/types';

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

    return () => {
        window.removeEventListener('keydown', handler);
    };
}

export function createGameListener(cbEscape: EmptyCallback, cbArrow: ArrowPressCallback): EmptyCallback {
    const escapeHandler = createEscapeHandler(cbEscape);
    const arrowHandler = createArrowsHandler(cbArrow);
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