import {
    UserGetAction,
    UserUpdateAction,
    UserUpdatePasswordAction,
    UserUpdateAvatarAction,
    UserRemoveAction,
    SignUpAction,
    SignInAction,
    SignOutAction,
    USER_ACTION_TYPES
} from './types';
import type {
    ApiUserInfo,
    ApiChangePasswordRequest,
    ApiSignUpRequest,
    ApiSignInRequest,
    ApiChangeAvatarRequest
} from '../../api/types';

export function userGetAction(): UserGetAction {
    return {
        type: USER_ACTION_TYPES.GET
    };
}

export function userUpdateAction(userInfo: ApiUserInfo): UserUpdateAction {
    return {
        type: USER_ACTION_TYPES.UPDATE,
        payload: userInfo
    };
}

export function userUpdateAvatarAction(userAvatar: ApiChangeAvatarRequest): UserUpdateAvatarAction {
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
