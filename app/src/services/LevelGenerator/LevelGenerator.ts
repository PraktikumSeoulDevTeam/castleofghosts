import cloneDepp from 'lodash/cloneDeep';
import {Levels} from './__levels';
import {BaseType, GeneratorConfiguration, MapPartials} from './types';

import {BackgroundMap, BackgroundPart, BackgroundAsset, Level} from '../../store/Level/types';

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

function mapWall(inputLevel: number[][]): number[][] {
    const level = cloneDepp(inputLevel);

    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level[i].length; j += 1) {
            const pos = level[i][j];
            const sumFloor = sumOf(inputLevel, i, j, BaseType.FLOOR);

            if (sumOf(inputLevel, i, j, BaseType.WALL) === MAX_SUM || allOneType(inputLevel, i, j, BaseType.WALL)) {
                level[i][j] = -1;
            }

            if (pos === BaseType.WALL) {
                /*
                     Crossroads
                 */
                // CROSS_RIGHT
                const crossRight =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL);
                if (crossRight) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_RIGHT;
                    continue;
                }
                // CROSS_LEFT
                const crossLeft1 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);
                const crossLeft2 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    (existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) ||
                        existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR));
                if (crossLeft1 || crossLeft2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_LEFT;
                    continue;
                }

                // CROSS_BOTTOM
                const crossBottom1 =
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    (existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) ||
                        existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR));
                const crossBottom2 =
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);
                if (crossBottom1 || crossBottom2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_BOTTOM;
                    continue;
                }

                // CROSS_TOP
                const crossroadTop =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    (existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) ||
                        existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR));
                if (crossroadTop) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_TOP;
                    continue;
                }

                // CROSS CENTER
                const crossroadCenter =
                    ((existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                        existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR)) ||
                        (existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                            existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR))) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);
                if (crossroadCenter) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_CROSSROAD_CENTER;
                    continue;
                }

                /**
                 * Column
                 */
                const wallColumn1 =
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL);
                const wallColumn2 = sumFloor === 8;
                if (wallColumn1 || wallColumn2) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_COLUMN;
                    continue;
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
                const deadblockTopLeft1 =
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);

                if (deadblockTopLeft1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TL;
                    continue;
                }
                // TR
                const deadblockTopRight1 =
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);

                if (deadblockTopRight1) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_TR;
                    continue;
                }

                // BL
                const deadblockBottomLeft1 =
                    existAndEqual(inputLevel, i - 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);

                const deadblockBottomLeft2 =
                    existAndEqual(inputLevel, i + 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL) &&
                    sumFloor >= 4;

                const deadblockBottomLeft3 =
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.WALL);

                if (deadblockBottomLeft1 || deadblockBottomLeft2 || deadblockBottomLeft3) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_BL;
                    continue;
                }
                // BR
                const deadblockBottomRight1 =
                    existAndEqual(inputLevel, i - 1, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);

                const deadblockBottomRight2 =
                    existAndEqual(inputLevel, i + 1, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL) &&
                    sumFloor >= 3;

                const deadblockBottomRight3 =
                    existAndEqual(inputLevel, i + 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.WALL);

                if (deadblockBottomRight1 || deadblockBottomRight2 || deadblockBottomRight3) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_DEADBLOCK_BR;
                    continue;
                }

                /*
                    Just Wall
                */
                // Side
                const sideWall1 =
                    ((sumFloor <= 3 && sumFloor >= 1) || sumFloor === 5 || sumFloor === 6) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL);

                const sideWall2 =
                    existAndEqual(inputLevel, i - 1, j, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) &&
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL);

                const sideWall3 =
                    existAndEqual(inputLevel, i + 1, j, BaseType.WALL) &&
                    existAndEqual(inputLevel, i - 1, j, BaseType.WALL) &&
                    (existAndEqual(inputLevel, i, j - 1, BaseType.FLOOR) ||
                        existAndEqual(inputLevel, i, j + 1, BaseType.FLOOR));

                if (sideWall1 || sideWall2 || sideWall3) {
                    level[i][j] = MapPartials.CORRIDOR_WALL_SIDE;
                    continue;
                }

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
                if (sumFloor === 9) {
                    cellNeighborhoods(i, j).forEach(([k, l]) => {
                        level[k][l] = -1;
                    });

                    level[i - 1][j - 1] = MapPartials.CORRIDOR_ROAD_3_3;
                }
            }
        }
    }

    return level;
}

const switcher = (el: MapPartials): BackgroundAsset => {
    switch (el) {
        case MapPartials.CORRIDOR_ROAD:
            return {
                part: 'FLOOR',
                type: 'SINGLE'
            };
        case MapPartials.CORRIDOR_ROAD_3_3:
            return {
                part: 'FLOOR',
                type: 'ROOM'
            };
        case MapPartials.CORRIDOR_ROAD_1_3:
            return {
                part: 'FLOOR',
                type: 'HORIZONTAL'
            };
        case MapPartials.CORRIDOR_ROAD_3_1:
            return {
                part: 'FLOOR',
                type: 'VERTICAL'
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
        case MapPartials.CORRIDOR_WALL_CROSSROAD_CENTER:
            return {
                part: 'WALL',
                type: 'CROSS'
            };
        case MapPartials.CORRIDOR_WALL_COLUMN:
            return {
                part: 'WALL',
                type: 'LEDGE'
            };
        default: {
            return {
                part: 'WALL',
                type: 'FILL'
            };
        }
    }
};

const mapToGameFormat = (level: number[][]): BackgroundMap => {
    const res: BackgroundMap = [];
    for (let i = 0; i < level.length; i += 1) {
        res.push([]);
        for (let j = 0; j < level[i].length; j += 1) {
            if (level[i][j] === -1) {
                res[i][j] = null;
            } else {
                const mapElement: BackgroundPart = {
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

        for (let i = 0; i < count; i += 1) {
            const map = mapToGameFormat(mapWall(Levels[1].map));

            result.push({
                ...Levels[1],
                map,
                interests: []
            });
        }

        return result;
    }
}
