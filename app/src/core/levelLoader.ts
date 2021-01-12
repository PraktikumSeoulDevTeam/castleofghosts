import {LEVELS_PATH} from './params';

import type {Level, LevelEd, Point, Tile} from './types';

/**
 * Загрузка уровней из файла
 */
export async function loadLevels(): Promise<Level[]> {
    try {
        const response: Response = await fetch(LEVELS_PATH);

        return transformToShit((await response.json()) as LevelEd[]);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error on levels load', LEVELS_PATH, error);

        return [];
    }
}

function transformToShit(levels: LevelEd[]): Level[] {
    const result: Level[] = levels.map<Level>((level: LevelEd) => {
        let startPoint: Point = [0, 0];
        let endPoint: Point = [0, 0];
        level.objects.find((levelRow: Tile[], y: number) =>
            levelRow.find((tile: Tile, x: number) => {
                if (tile.asset) {
                    if (tile.asset.part === 'DOOR') {
                        endPoint = [x, y];

                        return true;
                    }
                }

                return false;
            })
        );
        level.chars.find((levelRow: Tile[], y: number) =>
            levelRow.find((tile: Tile, x: number) => {
                if (tile.asset) {
                    if (tile.asset.part === 'SPAWN') {
                        startPoint = [x, y];

                        return true;
                    }
                }

                return false;
            })
        );

        return {
            startPoint,
            endPoint,
            map: level.map,
            objects: level.objects,
            chars: []
        };
    });

    return result;
}
