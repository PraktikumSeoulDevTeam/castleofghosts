import {
    USER_ACTION_TYPES,
    UserGetAction,
    UserSetAction,
    UserUpdateAction,
    UserUpdatePasswordAction,
    UserUpdateAvatarAction,
    UserRemoveAction,
    SignUpAction,
    SignInAction,
    SignOutAction,
    OAuthRequestAction,
    OAuthResponseAction,
    UserGeolocationGetAction,
    UserGeolocationSetAction
} from './types';
import type {ApiUserInfo, ApiChangePasswordRequest, ApiSignUpRequest, ApiSignInRequest} from '~/api/types';
import {AppPosition} from '~/services/geolocation/types';

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

export function oAuthRequestAction(): OAuthRequestAction {
    return {
        type: USER_ACTION_TYPES.OAUTH_REQUEST
    };
}

export function oAuthResponseAction(): OAuthResponseAction {
    return {
        type: USER_ACTION_TYPES.OAUTH_RESPONSE
    };
}

export function userGeolocationGetAction(): UserGeolocationGetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_GET
    };
}

export function userGeolocationSetAction(payload: AppPosition): UserGeolocationSetAction {
    return {
        type: USER_ACTION_TYPES.GEOLOCATION_SET,
        payload
    };
}
