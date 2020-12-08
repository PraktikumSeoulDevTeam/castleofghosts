import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUserInfo, updateUserInfo, updateUserAvatar, updateUserPassword, signUp, signIn, signOut} from '../../api';
import {userSetAction, userRemoveAction} from './actions';
import {
    SignInAction,
    SignUpAction,
    UserUpdateAction,
    UserUpdateAvatarAction,
    UserUpdatePasswordAction,
    USER_ACTION_TYPES
} from './types';
import {utilitySetLoading} from '../Utility/actions';
import type {ApiUserInfo} from '../../api/types';
import {toasterAddAction} from '../Toaster/actions';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.GET, userGetWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE, userSaveWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE_AVATAR, userChangeAvatarWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE_PASSWORD, userChangePasswordWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_UP, userSignUpWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
}

function* userGetWorker() {
    try {
        const userInfo: ApiUserInfo = yield call(getUserInfo);
        yield put(userSetAction(userInfo));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSignUpWorker error] ', error);
    }
}

function* userSaveWorker(action: UserUpdateAction) {
    try {
        const userData: ApiUserInfo = yield call(updateUserInfo, action.payload);
        yield put(userSetAction(userData));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userSaveWorker error] ', error);
    }
}

function* userChangeAvatarWorker(action: UserUpdateAvatarAction) {
    try {
        const userData: ApiUserInfo = yield call(updateUserAvatar, action.payload);
        yield put(userSetAction(userData));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userChangeAvatarWorker error] ', error);
    }
}

function* userChangePasswordWorker(action: UserUpdatePasswordAction) {
    try {
        yield call(updateUserPassword, action.payload);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userChangePasswordWorker error] ', error);
    }
}

function* userSignUpWorker(action: SignUpAction) {
    yield put(utilitySetLoading(true));

    try {
        const isOk: boolean = yield call(signUp, action.payload);
        if (isOk) {
            const userInfo: ApiUserInfo = yield call(getUserInfo);
            yield put(userSetAction(userInfo));
        }
    } catch (error) {
        yield put(
            toasterAddAction({
                text: error?.reason ?? 'Oopss, something worong :(',
                duration: 2000,
                id: Date.now()
            })
        );
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
            yield put(userSetAction(userInfo));
        }
    } catch (error) {
        yield put(
            toasterAddAction({
                text: error?.reason ?? 'Oopss, something worong :(',
                duration: 2000,
                id: Date.now()
            })
        );
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
