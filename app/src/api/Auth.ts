import {ApiSignInRequest, ApiUserInfo} from './types';

// TODO удалить после внедрения API
export function getUser(authData: ApiSignInRequest): ApiUserInfo {
    return {
        id: 1,
        login: authData.login
    } as ApiUserInfo;
}
