import cloneDepp from 'lodash/cloneDeep';
import {Levels} from './__levels';
import {BaseType, GeneratorConfiguration, MapPartials} from './types';

import {BackgroundType, Level} from '../../store/Level/types';

const MAX_SUM = 9;

const exist = (arr: number[][], i: number, j: number): boolean => {
    return i >= 0 && j >= 0 && arr[i] !== undefined && arr[i][j] !== undefined;
};
const existAndEqual = (arr: number[][], i: number, j: number, val): boolean => exist(arr, i, j) && arr[i][j] === val;
const sumOf = (arr: number[][], i: number, j: number, val: number) => {
    const data = [
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
    const data = [
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

    for (let k = 0; k < data.length; k += 1) {
        const [x, y] = data[k];
        if (exist(arr, x, y) && arr[x][y] !== val) {
            return false;
        }
    }

    return true;
};

function mapWall(inputLevel: number[][]): number[][] {
    const level = cloneDepp(inputLevel);

    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            const pos = level[i][j];
            if (sumOf(inputLevel, i, j, BaseType.WALL) === MAX_SUM || allOneType(inputLevel, i, j, BaseType.WALL)) {
                /*
                    случай, когда рядом нет дорого (темный кусок локации)
                 */
                level[i][j] = -1;
            }

            if (pos === BaseType.WALL) {
                const sumFloor = sumOf(inputLevel, i, j, BaseType.FLOOR);
                /**
                 * Deadblock type
                 */
                // TL
                if (
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL)
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TL;
                    continue;
                }
                // TR
                if (
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL)
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TR;
                    continue;
                }
                // BL
                if (
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL)
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_BL;
                    continue;
                }
                // BR
                if (
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL)
                ) {
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

                /*
                    Crossroads
                */
                // CROSS_RIGHT
                if (
                    sumFloor >= 3 &&
                    sumFloor <= 5 &&
                    ((existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                        existAndEqual(inputLevel, i + 1, j, BaseType.WALL)) ||
                        (existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                            existAndEqual(inputLevel, i - 1, j, BaseType.WALL)))
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_RIGHT;
                }
                // CROSS_LEFT
                if (
                    sumFloor >= 3 &&
                    sumFloor <= 5 &&
                    ((existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                        existAndEqual(inputLevel, i + 1, j, BaseType.WALL)) ||
                        (existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                            existAndEqual(inputLevel, i - 1, j, BaseType.WALL)))
                ) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_LEFT;
                }
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

        //for (let i = 0; i < count; i += 1) {
            const map = mapToGameFormat(mapWall(Levels[2].map));

            result.push({
                ...Levels[2],
                map,
                interests: []
            });
        //}

        return result;
    }
}
