import type {Level, LevelGenerateAction, LevelSaveAction} from './types';
import {LEVEL_ACTION_TYPES} from './types';
import {GeneratorConfiguration} from '~/services/LevelGenerator/types';

export function levelRandomGenerateAction(): LevelGenerateAction {
    return {
        type: LEVEL_ACTION_TYPES.GENERATE_LEVELS
    };
}

export function levelGenerateAction(generatorConfig: GeneratorConfiguration): LevelGenerateAction {
    return {
        type: LEVEL_ACTION_TYPES.GENERATE_LEVELS,
        payload: generatorConfig
    };
}

export function levelSaveAction(levels: Level[]): LevelSaveAction {
    return {
        type: LEVEL_ACTION_TYPES.SAVE_LEVELS,
        payload: levels
    };
}
