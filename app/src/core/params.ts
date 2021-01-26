/**
 * Шарина канваса
 */
export const WIDTH = 1024;

/**
 * Высота канваса
 */
export const HEIGHT = 768;

/**
 * Количество уровней в игре
 */
export const LEVELS_COUNT = 4;

/**
 * Время(сек), за которое необходимо завершить уровень
 */
export const LEVEL_TIME = 60;

/**
 * Эквивалени единицы размера в игре
 */
export const GRID = 32;

/**
 * Скорость передвижения мобов
 */
export const MOB_SPEED = 600;

/**
 * Путь к каталогу с уровнями
 */
export const LEVELS_PATH = './levels/levels.json';

export const enum STATE {
    OFF = 'OFF',
    INIT = 'INIT',
    START = 'START',
    LEVEL_START = 'LEVEL_START',
    GAME = 'GAME',
    PAUSE = 'PAUSE',
    LEVEL_END = 'LEVEL_END',
    WIN = 'WIN',
    LOOSE = 'LOOSE',
    END = 'END'
}
