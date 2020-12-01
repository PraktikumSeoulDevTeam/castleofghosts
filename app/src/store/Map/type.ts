type Point = [x: number, y: number];

export const enum InterestType {
    KEY = 'key',
    CHEST = 'chest'
}

export interface Interest {
    position: Point;
    type: InterestType;
}

export const enum BlockType {
    WALL = 'wall',
    ROAD = 'road'
}

export interface MapStore {
    startPosition: Point;
    finishPosition: Point;
    interests: Interest[];
    map: BlockType[][];
    canExit: boolean;
}

/**
 * GAME
 */

export interface Game {
    levels: MapStore[];
    currentLeve: number;
    life: number;
    // ...
}
