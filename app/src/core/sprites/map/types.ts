import {Sprite} from '../types';

export interface Wall {
    CORNER_TL: Sprite;
    CORNER_TR: Sprite;
    CORNER_BL: Sprite;
    CORNER_BR: Sprite;
    TOP: Sprite;
    SIDE: Sprite;
    LEDGE: Sprite;
    CROSS_TOP: Sprite;
    CROSS_BOTTOM: Sprite;
    CROSS_LEFT: Sprite;
    CROSS_RIGHT: Sprite;
    CROSS: Sprite;
    FILL: Sprite;
}

export interface Floor {
    ROOM: Sprite;
    SINGLE: Sprite;
    VERTICAL: Sprite;
    HORIZONTAL: Sprite;
}
