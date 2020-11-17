import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUserInfo, signIn, signOut} from '../../api';
import {ApiUserInfo} from '../../api/types';
import {userRemoveAction, userUpdateAction} from './actions';
import {SignInAction, USER_ACTION_TYPES} from './types';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
}

function* userSignInWorker(action: SignInAction) {
    try {
        const isOk: boolean = yield call(signIn, action.payload);
        if (isOk) {
            const userInfo: ApiUserInfo = yield call(getUserInfo);
            yield put(userUpdateAction(userInfo));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignInWorker error] ', error);
    }
}

function* userSignOutWorker() {
    try {
        const isOk: boolean = yield call(signOut);
        if (isOk) {
            yield put(userRemoveAction());
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignOutWorker error] ', error);
    }
}
