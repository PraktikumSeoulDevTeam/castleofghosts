import {store} from '..';

import {Level} from '../Level/types';

export function selectCurrentLevel(): Level {
    const levelId = store.getState().game.level.number ?? 0;

    return store.getState().level.levels[levelId];
}
