import type {Level} from '~/core/types';
import type {GeneratorConfiguration} from '~/services/LevelGenerator/types';

export const enum LEVELS_ACTION_TYPES {
    LOAD = 'cog/levels/load',
    ADD = 'cog/levels/add',
    GRAB = 'cog/levels/grab',
    GENERATE = 'cog/levels/generate'
}

export interface LevelsState {
    levels: Level[];
}

export interface LevelsLoadAction {
    type: LEVELS_ACTION_TYPES.LOAD;
}

export interface LevelsAddAction {
    type: LEVELS_ACTION_TYPES.ADD;
    payload: Level[];
}

export interface LevelsGrabAction {
    type: LEVELS_ACTION_TYPES.GRAB;
}

export interface LevelsGenerateAction {
    type: LEVELS_ACTION_TYPES.GENERATE;
    payload?: GeneratorConfiguration;
}

export type LevelsActions = LevelsLoadAction | LevelsAddAction | LevelsGrabAction | LevelsGenerateAction;
