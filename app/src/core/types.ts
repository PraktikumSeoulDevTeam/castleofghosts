export type EmptyCallback = () => void;
export type ArrowPressCallback = (x: number, y: number) => void;

export interface CanvasContext {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
}

export interface Sprite {
    image?: HTMLImageElement;
    posx: number;
    posy: number;
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
}

// TODO необходимо добавить карту и условия
export interface GameLevel {
    name: string;
    number: number;
}

export type GameStatePoint = 'OFF' | 'START' | 'INTERLUDE' | 'GAME' | 'PAUSE' | 'END';
