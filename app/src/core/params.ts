/**
 * Шарина канваса
 */
export const WIDTH = 1024;

/**
 * Высота канваса
 */
export const HEIGHT = 768;

/**
 * Эквивалени единицы размера в игре
 */
export const GRID = 32;

/**
 * Путь к каталогу с уровнями
 */
export const LEVELS_PATH = './levels/levels.json';

export const enum STATE {
    OFF = 'OFF',
    INIT = 'INIT',
    START = 'START',
    INTERLUDE = 'INTERLUDE',
    GAME = 'GAME',
    PAUSE = 'PAUSE',
    LOOSE = 'LOOSE',
    WIN = 'WIN',
    END = 'END'
}
