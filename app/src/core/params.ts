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
 * Текущая версия формата уровня
 */
export const CURRENT_LEVEL_VERSION = 1;

/**
 * Слои игры
 */
export enum LAYER {
    MAP = 'map',
    OBJECTS = 'objects',
    CHARS = 'chars'
}

/**
 * Роли тайлов
 */
export enum ROLE {
    PLAYER,
    MOB,
    DOOR,
    KEY,
    SPAWN
}
