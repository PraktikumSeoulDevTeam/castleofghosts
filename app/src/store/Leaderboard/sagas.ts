import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {addToLeaderboard, getLeaderboard} from '~/api';
import {lbAddAction} from './actions';
import {LB_ACTION_TYPES, LbUploadAction, LbDownloadAction} from './types';
import type {ApiAddToLeaderboardRequest, ApiGetLeaderboardResponse} from '~/api/types';

export function* leaderboardWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(LB_ACTION_TYPES.UPLOAD, addToLeaderboardWorker);
    yield takeLeading(LB_ACTION_TYPES.DOWNLOAD, getLeaderboardWorker);
}

function* addToLeaderboardWorker(action: LbUploadAction) {
    const addToLeaderboardRquest: ApiAddToLeaderboardRequest = {
        ratingFieldName: 'points',
        data: action.payload
    };
    try {
        const isOk: boolean = yield call(addToLeaderboard, addToLeaderboardRquest);
        if (!isOk) {
            throw new Error('Что-то пошло не так');
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[addToLeaderboardWorker error] ', error);
    }
}

function* getLeaderboardWorker(action: LbDownloadAction) {
    try {
        const leaderboardInfo: ApiGetLeaderboardResponse = yield call(getLeaderboard, action.payload);
        if (leaderboardInfo.length) {
            yield put(lbAddAction(leaderboardInfo));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[getLeaderboardWorker error] ', error);
    }
}
