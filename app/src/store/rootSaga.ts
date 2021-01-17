import {Saga} from 'redux-saga';
import {fork, ForkEffect, SagaReturnType} from 'redux-saga/effects';

import {audioWatcher} from './Audio/sagas';
import {gameWatcher} from './Game/sagas';
import {leaderboardWatcher} from './Leaderboard/sagas';
import {levelsWatcher} from './Level/sagas';
import {toasterWatcher} from './Toaster/sagas';
import {userWatcher} from './User/sagas';

export function* rootSaga(): Generator<ForkEffect<SagaReturnType<Saga>>> {
    yield fork(audioWatcher);
    yield fork(userWatcher);
    yield fork(leaderboardWatcher);
    yield fork(toasterWatcher);
    yield fork(gameWatcher);
    yield fork(levelsWatcher);
}
