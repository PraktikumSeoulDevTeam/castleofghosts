import type {ApiSignInRequest, ApiSignUpRequest, ApiUserInfo} from '../../api/types';

export const enum USER_ACTION_TYPES {
    UPDATE = 'cog/user/update',
    REMOVE = 'cog/user/remove',
    SIGN_UP = 'cog/user/signup',
    SIGN_IN = 'cog/user/signin',
    SIGN_OUT = 'cog/user/signout'
}

export interface UserState {
    info: Partial<ApiUserInfo>;
}

export interface UserUpdateAction {
    type: USER_ACTION_TYPES.UPDATE;
    payload: Partial<ApiUserInfo>;
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

export type UserActions = UserUpdateAction | UserRemoveAction | SignUpAction | SignInAction | SignOutAction;
