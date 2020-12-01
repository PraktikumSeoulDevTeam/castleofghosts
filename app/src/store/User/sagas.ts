import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUserInfo, updateUserInfo, updateUserPassword, signUp, signIn, signOut} from '../../api';
import {userRemoveAction, userUpdateAction} from './actions';
import {SignInAction, SignUpAction, UserUpdateAction, UserUpdatePasswordAction, USER_ACTION_TYPES} from './types';
import type {ApiUserInfo} from '../../api/types';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.GET, userGetWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE, userSaveWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE_PASSWORD, userChangePasswordWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_UP, userSignUpWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
}

function* userGetWorker() {
    try {
        const userInfo: ApiUserInfo = yield call(getUserInfo);
        yield put(userUpdateAction(userInfo));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    }
}

function* userSaveWorker(action: UserUpdateAction) {
    try {
        const userData: ApiUserInfo = yield call(updateUserInfo, action.payload);
        yield put(userUpdateAction(userData));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    }
}

function* userChangePasswordWorker(action: UserUpdatePasswordAction) {
    try {
        yield call(updateUserPassword, action.payload);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    }
}

function* userSignUpWorker(action: SignUpAction) {
    try {
        const isOk: boolean = yield call(signUp, action.payload);
        if (isOk) {
            const userInfo: ApiUserInfo = yield call(getUserInfo);
            yield put(userUpdateAction(userInfo));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    }
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
