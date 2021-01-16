import {Level} from '~/store/Level/types';

export type EmptyCallback = () => void;
export type ArrowPressCallback = (x: number, y: number) => void;

export interface CanvasContext {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
}

/**
 * Информация о персонаже
 */
export interface GameCharacterInfo {
    id: number;
    name: string;
    points: number;
    keyFound: boolean;
}

/**
 * Информация о движении персонажа
 */
export interface GameCharacterMove {
    posx: number;
    posy: number;
    needRender: boolean;
}

// TODO необходимо добавить условия
export interface GameLevel {
    name: string;
    number: number;
    map?: Level;
}

export interface KeyInfo {
    posX: number;
    posY: number;
    isFound: boolean;
}

export type GameStatePoint = 'OFF' | 'START' | 'INTERLUDE' | 'GAME' | 'PAUSE' | 'END' | 'WIN';
