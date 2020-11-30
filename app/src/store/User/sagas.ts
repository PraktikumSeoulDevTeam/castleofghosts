import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUserInfo, signUp, signIn, signOut} from '../../api';
import {userRemoveAction, userUpdateAction} from './actions';
import {SignInAction, SignUpAction, USER_ACTION_TYPES} from './types';
import type {ApiUserInfo} from '../../api/types';
import {toasterAddAction} from '../Toaster/actions';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.SIGN_UP, userSignUpWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
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
        yield put(
            toasterAddAction({
                text: 'Login or password is incorrect',
                duration: 1000
            })
        );
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
