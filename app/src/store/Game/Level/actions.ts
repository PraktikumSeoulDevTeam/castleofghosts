import {GeneratorConfiguration} from '../../../services/LevelGenerator/types';
import {LevelGenerateAction, LEVEL_ACTION_TYPES} from './types';

export function levelGenerateAction(generatorConfig: GeneratorConfiguration): LevelGenerateAction {
    return {
        action: LEVEL_ACTION_TYPES.GENERATE_LEVELS,
        payload: generatorConfig
    };
}
