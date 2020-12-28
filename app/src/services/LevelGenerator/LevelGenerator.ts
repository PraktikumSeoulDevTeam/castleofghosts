import cloneDepp from 'lodash/cloneDeep';
import {Levels} from './__levels';
import {BaseType, GeneratorConfiguration, MapPartials} from './types';

import {BackgroundType, Level} from '../../store/Level/types';

const MAX_SUM = 9;

const exist = (arr: number[][], i: number, j: number): boolean =>
    i >= 0 && j >= 0 && arr[i] !== undefined && arr[i][j] !== undefined;

const cellNeighborhoods = (i: number, j: number): number[][] => [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1]
];

const existAndEqual = (arr: number[][], i: number, j: number, val): boolean => exist(arr, i, j) && arr[i][j] === val;
const sumOf = (arr: number[][], i: number, j: number, val: number) => {
    const data = cellNeighborhoods(i, j);

    let sum = 0;
    for (let k = 0; k < data.length; k += 1) {
        const [x, y] = data[k];
        if (exist(arr, x, y) && arr[x][y] === val) {
            sum += 1;
        }
    }

    return sum;
};

const allOneType = (arr: number[][], i: number, j: number, val): boolean => {
    const data = cellNeighborhoods(i, j);

    for (let k = 0; k < data.length; k += 1) {
        const [x, y] = data[k];
        if (exist(arr, x, y) && arr[x][y] !== val) {
            return false;
        }
    }

    return true;
};

const prepareFromMap = (inputLevel: number[][]): number[][] => {
    const level = inputLevel;
    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            /**
             *  0 0 0
             *  0 0 0
             *  0 0 0
             */
            if (sumOf(inputLevel, i, j, BaseType.WALL) === MAX_SUM || allOneType(inputLevel, i, j, BaseType.WALL)) {
                level[i][j] = -1;
            }
        }
    }
    console.log(level);
    return level;
};

function mapWall(inputLevel: number[][]): number[][] {
    const level = prepareFromMap(cloneDepp(inputLevel));

    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            const pos = level[i][j];

            /**
             *  0 0 0
             *  0 0 0
             *  0 0 0
             */
            if (sumOf(inputLevel, i, j, BaseType.WALL) === MAX_SUM || allOneType(inputLevel, i, j, BaseType.WALL)) {
                level[i][j] = -1;
            }

            if (pos === BaseType.WALL) {
                const sumFloor = sumOf(inputLevel, i, j, BaseType.FLOOR);
                /*
                     Crossroads
                 */
                // CROSS_RIGHT
                const cr_1 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL);
                if (cr_1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_RIGHT;
                    continue;
                }
                // CROSS_LEFT
                const cl_1 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);
                if (cl_1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_LEFT;
                    continue;
                }
                // CROSS_BOTTOM
                const cb_1 =
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);
                if (cb_1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_BOTTOM;
                    continue;
                }

                // CROSS_TOP
                const ct_1 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);
                if (ct_1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_TOP;
                }

                /**
                 * Deadblock type
                 */
                /**
                 * TL
                 *  0 0 0  1 1 1
                 *  0 0 0  1 1 1
                 *  0 0 1  1 1 1
                 */
                const tl_1 =
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);

                const tl_2 =
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    sumFloor >= 5;

                if (tl_1 || tl_2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TL;
                    continue;
                }
                // TR
                const tr_1 =
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);

                if (tr_1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TR;
                    continue;
                }

                // BL
                const bl_1 =
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);
                const bl_2 =
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    sumFloor >= 4;
                if (bl_1 || bl_2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_BL;
                    continue;
                }
                // BR
                const br_1 =
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);
                const br_2 =
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    sumFloor >= 4;
                if (br_1 || br_2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_BR;
                    continue;
                }

                /*
                    Just Wall
                */
                // Side
                if (
                    ((sumFloor <= 3 && sumFloor >= 1) || sumFloor === 5 || sumFloor === 6) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL)
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_SIDE;
                    continue;
                }
                // Top pos
                if (
                    sumFloor <= 6 &&
                    sumFloor >= 1 &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL)
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_TOP_BOTTOM;
                    continue;
                }
            }

            if (pos === BaseType.FLOOR) {
                /**
                 * Чек на 3х3, 1х3 и 3х1 дороги
                 */
            }
        }
    }

    return level;
}

const switcher = (el: MapPartials) => {
    switch (el) {
        case MapPartials.CORRIDOR_ROAD:
            return {
                part: 'FLOOR',
                type: 'SINGLE'
            };
        case MapPartials.CORRIDOR_ROAD_3_3:
            return {
                part: 'FLOOR',
                type: 'SINGLE'
            };
        case MapPartials.CORRIDOR_ROAD_1_3:
            return {
                part: 'FLOOR',
                type: 'SINGLE'
            };
        case MapPartials.CORRIDOR_WALL_SIDE:
            return {
                part: 'WALL',
                type: 'SIDE'
            };
        case MapPartials.CORRIDOR_WALL_TOP_BOTTOM:
            return {
                part: 'WALL',
                type: 'TOP'
            };
        case MapPartials.CORRIDOR_WALL_DEADBLOCK_TL:
            return {
                part: 'WALL',
                type: 'CORNER_TL'
            };
        case MapPartials.CORRIDOR_WALL_DEADBLOCK_TR:
            return {
                part: 'WALL',
                type: 'CORNER_TR'
            };
        case MapPartials.CORRIDOR_WALL_DEADBLOCK_BL:
            return {
                part: 'WALL',
                type: 'CORNER_BL'
            };
        case MapPartials.CORRIDOR_WALL_DEADBLOCK_BR:
            return {
                part: 'WALL',
                type: 'CORNER_BR'
            };
        case MapPartials.CORRIDOR_WALL_CROSSROAD_RIGHT:
            return {
                part: 'WALL',
                type: 'CROSS_RIGHT'
            };
        case MapPartials.CORRIDOR_WALL_CROSSROAD_LEFT:
            return {
                part: 'WALL',
                type: 'CROSS_LEFT'
            };
        case MapPartials.CORRIDOR_WALL_CROSSROAD_BOTTOM:
            return {
                part: 'WALL',
                type: 'CROSS_BOTTOM'
            };
        case MapPartials.CORRIDOR_WALL_CROSSROAD_TOP:
            return {
                part: 'WALL',
                type: 'CROSS_TOP'
            };
        default: {
            return {
                part: 'WALL',
                type: 'FILL'
            };
        }
    }
};

const mapToGameFormat = (level: number[][]): BackgroundType[][] => {
    const res: BackgroundType[][] = [];
    for (let i = 0; i < level.length; i += 1) {
        res.push([]);
        for (let j = 0; j < level[i].length; j += 1) {
            if (level[i][j] === -1) {
                res[i][j] = null;
            } else {
                const mapElement: BackgroundType = {
                    canWalk: level[i][j] === 1,
                    asset: switcher(level[i][j])
                };

                res[i].push(mapElement);
            }
        }
    }

    return res;
};

export class LevelGenerator {
    static generate(config: GeneratorConfiguration): Level[] {
        const {count} = config;
        const result: Level[] = [];

        // for (let i = 0; i < count; i += 1) {
        const map = mapToGameFormat(mapWall(Levels[0].map));

        result.push({
            ...Levels[0],
            map,
            interests: []
        });
        // }

        return result;
    }
}
