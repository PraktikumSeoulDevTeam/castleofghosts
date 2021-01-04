import type {ApiChangePasswordRequest, ApiSignInRequest, ApiSignUpRequest, ApiUserInfo} from '~/api/types';

export const enum USER_ACTION_TYPES {
    GET = 'cog/user/get',
    SET = 'cog/user/set',
    UPDATE = 'cog/user/update',
    UPDATE_PASSWORD = 'cog/user/updatepassword',
    UPDATE_AVATAR = 'cog/user/updateavatar',
    REMOVE = 'cog/user/remove',
    SIGN_UP = 'cog/user/signup',
    SIGN_IN = 'cog/user/signin',
    SIGN_OUT = 'cog/user/signout',
    GEOLOCATION_GET = 'cog/user/geolocation/get',
    GEOLOCATION_SET = 'cog/user/geolocation/set',
    GEOLOCATION_CITY_SET = 'cog/user/geolocation/city/set'
}

export interface UserState {
    info: Partial<ApiUserInfo>;
    geolocation: UserStateGeolocation;
}

export interface UserStateGeolocation {
    position: GeolocationPosition;
    city: string;
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

export interface UserGeolocationGetAction {
    type: USER_ACTION_TYPES.GEOLOCATION_GET;
}

export interface UserGeolocationSetAction {
    type: USER_ACTION_TYPES.GEOLOCATION_SET;
    payload: GeolocationPosition;
}

export interface UserGeolocationCitySetAction {
    type: USER_ACTION_TYPES.GEOLOCATION_CITY_SET;
    payload: string;
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
    | SignOutAction
    | UserGeolocationGetAction
    | UserGeolocationSetAction
    | UserGeolocationCitySetAction;
