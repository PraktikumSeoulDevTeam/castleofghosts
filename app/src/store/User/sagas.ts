import {call, ForkEffect, put, select, takeLeading} from 'redux-saga/effects';

import {
    getUserInfo,
    updateUserInfo,
    updateUserAvatar,
    updateUserPassword,
    signUp,
    signIn,
    signOut,
    getServiceId,
    authWithCode
} from '~/api';
import {GeolocationApiGet, GeolocationApiGetCity} from '~/services/geolocation/geolocation';
import {toasterAddAction} from '~/store/Toaster/actions';
import {utilitySetLoadingAction} from '~/store/Utility/actions';
import {clearQueryParams, getQueryParam, redirectToYandexOAuth} from '~/utils';

import {userSetAction, userRemoveAction, userGeolocationSetAction, userGetAction} from './actions';

import {
    SignInAction,
    SignUpAction,
    UserStateGeolocation,
    UserUpdateAction,
    UserUpdateAvatarAction,
    UserUpdatePasswordAction,
    USER_ACTION_TYPES
} from './types';
import type {ApiUserInfo} from '~/api/types';
import type {AppStoreState} from '~/store/types';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.GET, userGetWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE, userSaveWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE_AVATAR, userChangeAvatarWorker);
    yield takeLeading(USER_ACTION_TYPES.UPDATE_PASSWORD, userChangePasswordWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_UP, userSignUpWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
    yield takeLeading(USER_ACTION_TYPES.OAUTH_REQUEST, userOAuthRequestWorker);
    yield takeLeading(USER_ACTION_TYPES.OAUTH_RESPONSE, userOAuthResponseWorker);
    yield takeLeading(USER_ACTION_TYPES.GEOLOCATION_GET, userGeolocationGetWorker);
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
    yield put(utilitySetLoadingAction(true));

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
        yield put(utilitySetLoadingAction(false));
    }
}

function* userSignInWorker(action: SignInAction) {
    yield put(utilitySetLoadingAction(true));

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
        yield put(utilitySetLoadingAction(false));
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

function* userGeolocationGetWorker() {
    try {
        const res: GeolocationPosition = yield call(GeolocationApiGet);
        if (res) {
            const data: UserStateGeolocation = {
                latitude: res.coords.latitude,
                longitude: res.coords.longitude,
                city: yield call(GeolocationApiGetCity, res)
            };
            yield put(userGeolocationSetAction(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userGeolocationGetWorker error] ', error);
    }
}

function* userOAuthRequestWorker() {
    try {
        const serviceId = yield call(getServiceId);
        yield call(redirectToYandexOAuth, serviceId);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userOAuthRequestWorker error] ', error);
    }
}

function* userOAuthResponseWorker() {
    try {
        const code = yield call(getQueryParam, 'code');
        if (code) {
            const isAuthenticated: boolean = yield select((state: AppStoreState) => !!state.user.info.id);
            if (!isAuthenticated) {
                const isOk = yield call(authWithCode, code);
                if (isOk) {
                    yield put(userGetAction());
                }
            }
            yield clearQueryParams();
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('[userOAuthResponseWorker error] ', error);
    }
}
