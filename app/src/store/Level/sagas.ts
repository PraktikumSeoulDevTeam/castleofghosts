import {ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {LevelGenerator} from '../../services/LevelGenerator/LevelGenerator';
import {levelSaveAction} from './actions';
import {LevelGenerateAction, LEVEL_ACTION_TYPES} from './types';

export function* levelWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(LEVEL_ACTION_TYPES.GENERATE_LEVELS, levelGeneratorWorker);
}

function* levelGeneratorWorker(action: LevelGenerateAction) {
    /**
     * Получаем уровни с генератора
     */
    const levels = yield LevelGenerator.generate(action.payload);
    yield put(levelSaveAction(levels));
}
