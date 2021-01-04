import {
    UserGetAction,
    UserSetAction,
    UserUpdateAction,
    UserUpdatePasswordAction,
    UserUpdateAvatarAction,
    UserRemoveAction,
    SignUpAction,
    SignInAction,
    SignOutAction,
    UserGeolocationGetAction,
    UserGeolocationSetAction,
    USER_ACTION_TYPES,
    UserGeolocationCitySetAction
} from './types';
import type {ApiUserInfo, ApiChangePasswordRequest, ApiSignUpRequest, ApiSignInRequest} from '~/api/types';

export function userGetAction(): UserGetAction {
    return {
        type: USER_ACTION_TYPES.GET
    };
}

export function userSetAction(userInfo: ApiUserInfo): UserSetAction {
    return {
        type: USER_ACTION_TYPES.SET,
        payload: userInfo
    };
}

export function userUpdateAction(userInfo: ApiUserInfo): UserUpdateAction {
    return {
        type: USER_ACTION_TYPES.UPDATE,
        payload: userInfo
    };
}

export function userUpdateAvatarAction(userAvatar: FormData): UserUpdateAvatarAction {
    return {
        type: USER_ACTION_TYPES.UPDATE_AVATAR,
        payload: userAvatar
    };
}

export function userUpdatePasswordAction(userPasswordData: ApiChangePasswordRequest): UserUpdatePasswordAction {
    return {
        type: USER_ACTION_TYPES.UPDATE_PASSWORD,
        payload: userPasswordData
    };
}

export function userRemoveAction(): UserRemoveAction {
    return {
        type: USER_ACTION_TYPES.REMOVE
    };
}

export function signUpAction(signUpData: ApiSignUpRequest): SignUpAction {
    return {
        type: USER_ACTION_TYPES.SIGN_UP,
        payload: signUpData
    };
}

export function signInAction(signInData: ApiSignInRequest): SignInAction {
    return {
        type: USER_ACTION_TYPES.SIGN_IN,
        payload: signInData
    };
}

export function signOutAction(): SignOutAction {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT
    };
}

export function userGeolocationGetAction(): UserGeolocationGetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_GET
    };
}

export function userGeolocationSetAction(payload: GeolocationPosition): UserGeolocationSetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_SET,
        payload
    };
}

export function userGeolocationCitySetAction(payload: string): UserGeolocationCitySetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_CITY_SET,
        payload
    };
}
