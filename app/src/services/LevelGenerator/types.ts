export type GeneratorConfiguration = {
    shapes: [number, number][]; // MxN, where M - rows, N - columns
    count: number;
    difficult: number; // for future
};

export const enum BaseType {
    FLOOR = 1,
    WALL = 0
}

export const enum MapPartials {
    CORRIDOR_ROAD = 1,
    CORRIDOR_ROAD_3_3 = 2,
    CORRIDOR_ROAD_1_3 = 3,
    CORRIDOR_ROAD_3_1 = 4,

    CORRIDOR_WALL_SIDE = 10,
    CORRIDOR_WALL_TOP_BOTTOM = 11,

    CORRIDOR_WALL_DEADBLOCK_TL = 12,
    CORRIDOR_WALL_DEADBLOCK_TR = 13,
    CORRIDOR_WALL_DEADBLOCK_BL = 14,
    CORRIDOR_WALL_DEADBLOCK_BR = 15,

    CORRIDOR_WALL_CROSSROAD_LEFT = 16,
    CORRIDOR_WALL_CROSSROAD_RIGHT = 17,
    CORRIDOR_WALL_CROSSROAD_BOTTOM = 18,
    CORRIDOR_WALL_CROSSROAD_TOP = 19,
    CORRIDOR_WALL_CROSSROAD_CENTER = 20,
    CORRIDOR_WALL_COLUMN = 21
}
