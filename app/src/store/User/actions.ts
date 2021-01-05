import {
    UserGetAction,
    UserUpdateAction,
    UserRemoveAction,
    SignUpAction,
    SignInAction,
    SignOutAction,
    UserGeolocationGetAction,
    UserGeolocationSetAction,
    USER_ACTION_TYPES,
    UserStateGeolocation
} from './types';
import type {ApiUserInfo, ApiSignUpRequest, ApiSignInRequest} from '../../api/types';

export function userGetAction(): UserGetAction {
    return {
        type: USER_ACTION_TYPES.GET
    };
}

export function userUpdateAction(userInfo: Partial<ApiUserInfo>): UserUpdateAction {
    return {
        type: USER_ACTION_TYPES.UPDATE,
        payload: userInfo
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

export function userGeolocationSetAction(payload: UserStateGeolocation): UserGeolocationSetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_SET,
        payload
    };
}
