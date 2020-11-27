import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUserInfo, signUp, signIn, signOut} from '../../api';
import {userRemoveAction, userUpdateAction} from './actions';
import {SignInAction, SignUpAction, USER_ACTION_TYPES} from './types';
import type {ApiUserInfo} from '../../api/types';
import {utilitySetLoading} from '../Utility/actions';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.SIGN_UP, userSignUpWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
}

function* userSignUpWorker(action: SignUpAction) {
    yield put(utilitySetLoading(true));

    try {
        const isOk: boolean = yield call(signUp, action.payload);
        if (isOk) {
            const userInfo: ApiUserInfo = yield call(getUserInfo);
            yield put(userUpdateAction(userInfo));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    } finally {
        yield put(utilitySetLoading(false));
    }
}

function* userSignInWorker(action: SignInAction) {
    yield put(utilitySetLoading(true));

    try {
        const isOk: boolean = yield call(signIn, action.payload);
        if (isOk) {
            const userInfo: ApiUserInfo = yield call(getUserInfo);
            yield put(userUpdateAction(userInfo));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignInWorker error] ', error);
    } finally {
        yield put(utilitySetLoading(false));
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
