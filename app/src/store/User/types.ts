import type {ApiChangePasswordRequest, ApiSignInRequest, ApiSignUpRequest, ApiUserInfo} from '../../api/types';

export const enum USER_ACTION_TYPES {
    GET = 'cog/user/get',
    SET = 'cog/user/set',
    UPDATE = 'cog/user/update',
    UPDATE_PASSWORD = 'cog/user/updatepassword',
    UPDATE_AVATAR = 'cog/user/updateavatar',
    REMOVE = 'cog/user/remove',
    SIGN_UP = 'cog/user/signup',
    SIGN_IN = 'cog/user/signin',
    SIGN_OUT = 'cog/user/signout'
}

export interface UserState {
    info: Partial<ApiUserInfo>;
}

export interface UserGetAction {
    type: USER_ACTION_TYPES.GET;
}

export interface UserSetAction {
    type: USER_ACTION_TYPES.SET;
    payload: ApiUserInfo;
}

export interface UserUpdateAction {
    type: USER_ACTION_TYPES.UPDATE;
    payload: ApiUserInfo;
}

export interface UserUpdateAvatarAction {
    type: USER_ACTION_TYPES.UPDATE_AVATAR;
    payload: FormData;
}

export interface UserUpdatePasswordAction {
    type: USER_ACTION_TYPES.UPDATE_PASSWORD;
    payload: ApiChangePasswordRequest;
}

export interface UserRemoveAction {
    type: USER_ACTION_TYPES.REMOVE;
}

export interface SignUpAction {
    type: USER_ACTION_TYPES.SIGN_UP;
    payload: ApiSignUpRequest;
}

export interface SignInAction {
    type: USER_ACTION_TYPES.SIGN_IN;
    payload: ApiSignInRequest;
}

export interface SignOutAction {
    type: USER_ACTION_TYPES.SIGN_OUT;
}

export type UserActions =
    | UserGetAction
    | UserSetAction
    | UserUpdateAction
    | UserUpdatePasswordAction
    | UserUpdateAvatarAction
    | UserRemoveAction
    | SignUpAction
    | SignInAction
    | SignOutAction;
