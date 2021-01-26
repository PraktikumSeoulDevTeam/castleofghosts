import isEqual from 'lodash/isEqual';
import {call, ForkEffect, put, select, takeLeading} from 'redux-saga/effects';

import {addToLeaderboard, getLeaderboard} from '~/api';

import {lbPutAction} from './actions';

import {LB_ACTION_TYPES, LbUploadAction, LbDownloadAction} from './types';
import type {
    ApiAddToLeaderboardRequest,
    ApiGetLeaderboardRequest,
    ApiGetLeaderboardResponse,
    ApiGetLeaderboardResponseElement
} from '~/api/types';
import type {AppStoreState} from '~/store/types';

export function* leaderboardWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(LB_ACTION_TYPES.UPLOAD, addToLeaderboardWorker);
    yield takeLeading(LB_ACTION_TYPES.DOWNLOAD, getLeaderboardWorker);
}

function* addToLeaderboardWorker(action: LbUploadAction) {
    const addToLeaderboardRquest: ApiAddToLeaderboardRequest = {
        ratingFieldName: 'cogTime',
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
    const getLeaderboardRquest: ApiGetLeaderboardRequest = {
        ratingFieldName: 'cogTime',
        cursor: 0,
        limit: action.payload
    };
    try {
        const leaderboardElements: ApiGetLeaderboardResponse = yield call(getLeaderboard, getLeaderboardRquest);
        if (leaderboardElements.length) {
            const newLeaderboardRecords = leaderboardElements.map(
                (leaderboardElement: ApiGetLeaderboardResponseElement) => leaderboardElement.data
            );
            const leaderboardRecords = yield select((state: AppStoreState) => state.leaderboard.list);
            if (!isEqual(leaderboardRecords, newLeaderboardRecords)) {
                yield put(lbPutAction(newLeaderboardRecords));
            }
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[getLeaderboardWorker error] ', error);
    }
}
