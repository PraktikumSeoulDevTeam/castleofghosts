import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';

import {loadLevels} from '~/core/levelLoader';
import {LevelGenerator} from '~/services/LevelGenerator/LevelGenerator';

import {levelsAddAction} from './actions';

import {LevelsGenerateAction, LEVELS_ACTION_TYPES} from './types';

export function* levelsWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(LEVELS_ACTION_TYPES.LOAD, levelsLoadWorker);
    yield takeLeading(LEVELS_ACTION_TYPES.GENERATE, levelsGeneratorWorker);
}

function* levelsLoadWorker() {
    const levels = yield call(loadLevels);
    yield put(levelsAddAction(levels));
}

function* levelsGeneratorWorker(action: LevelsGenerateAction) {
    /**
     * Получаем уровни с генератора
     */
    let {payload} = action;

    if (!payload) {
        payload = {
            count: Math.floor(Math.random() * 6) + 3,
            difficult: 0,
            shapes: []
        };
    }

    const levels = yield LevelGenerator.generate(payload);
    yield put(levelsAddAction(levels));
}
