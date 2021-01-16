import {LevelsLoadAction, LevelsAddAction, LevelsGenerateAction, LevelsGrabAction, LEVELS_ACTION_TYPES} from './types';
import type {Level} from '~/core/types';
import type {GeneratorConfiguration} from '~/services/LevelGenerator/types';

export function levelsLoadAction(): LevelsLoadAction {
    return {
        type: LEVELS_ACTION_TYPES.LOAD
    };
}

export function levelsAddAction(levels: Level[]): LevelsAddAction {
    return {
        type: LEVELS_ACTION_TYPES.ADD,
        payload: levels
    };
}

export function levelsGrabAction(): LevelsGrabAction {
    return {
        type: LEVELS_ACTION_TYPES.GRAB
    };
}

export function levelsGenerateAction(generatorConfig?: GeneratorConfiguration): LevelsGenerateAction {
    return {
        type: LEVELS_ACTION_TYPES.GENERATE,
        payload: generatorConfig
    };
}
