import {Saga} from 'redux-saga';
import {fork, ForkEffect, SagaReturnType} from 'redux-saga/effects';
import {leaderboardWatcher} from './Leaderboard/sagas';
import {userWatcher} from './User/sagas';

export function* rootSaga(): Generator<ForkEffect<SagaReturnType<Saga>>> {
    yield fork(userWatcher);
    yield fork(leaderboardWatcher);
}
