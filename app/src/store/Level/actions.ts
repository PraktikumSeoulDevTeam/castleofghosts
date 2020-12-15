import {GeneratorConfiguration} from '../../services/LevelGenerator/types';
import {Level, LevelGenerateAction, LevelSaveAction, LEVEL_ACTION_TYPES} from './types';

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
