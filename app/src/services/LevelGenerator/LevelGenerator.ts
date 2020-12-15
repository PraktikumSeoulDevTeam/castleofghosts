import {Levels} from './__levels';
import type {GeneratorConfiguration} from './types';

import {Level} from '../../store/Level/types';

export class LevelGenerator {
    static generate(config: GeneratorConfiguration): Level[] {
        const {count} = config;
        const result: Level[] = [];

        for (let i = 0; i < count; i += 1) {
            result.push(Levels[0]);
        }

        return result;
    }
}
