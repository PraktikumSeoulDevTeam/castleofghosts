import type {ApiSignInRequest, ApiSignUpRequest, ApiUserInfo} from '../../api/types';

export const enum USER_ACTION_TYPES {
    GET = 'cog/user/get',
    UPDATE = 'cog/user/update',
    REMOVE = 'cog/user/remove',
    SIGN_UP = 'cog/user/signup',
    SIGN_IN = 'cog/user/signin',
    SIGN_OUT = 'cog/user/signout',
    GEOLOCATION_GET = 'cog/user/geolocation/get',
    GEOLOCATION_SET = 'cog/user/geolocation/set'
}

export interface UserState {
    info: Partial<ApiUserInfo>;
    geolocation: UserStateGeolocation;
}

export interface UserStateGeolocation {
    latitude: number;
    longitude: number;
    city: string;
}

export interface UserGetAction {
    type: USER_ACTION_TYPES.GET;
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

export interface UserGeolocationGetAction {
    type: USER_ACTION_TYPES.GEOLOCATION_GET;
}

export interface UserGeolocationSetAction {
    type: USER_ACTION_TYPES.GEOLOCATION_SET;
    payload: UserStateGeolocation;
}

export type UserActions =
    | UserGetAction
    | UserUpdateAction
    | UserRemoveAction
    | SignUpAction
    | SignInAction
    | SignOutAction
    | UserGeolocationGetAction
    | UserGeolocationSetAction;
