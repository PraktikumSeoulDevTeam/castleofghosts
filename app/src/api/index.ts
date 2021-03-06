import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

import {performanceCheckEnd, performanceCheckStart} from '~/services/perfomance/perfomance';

import type {
    ApiAddToLeaderboardRequest,
    ApiBadRequestError,
    ApiChangePasswordRequest,
    ApiGetLeaderboardRequest,
    ApiGetLeaderboardResponse,
    ApiServiceIdResponse,
    ApiSignInRequest,
    ApiSignUpRequest,
    ApiSignUpResponce,
    ApiUserInfo
} from './types';

export const API_URL = new URL('https://ya-praktikum.tech/api/v2');

/**
 * Клиент для API https://ya-praktikum.tech/api/v2/swagger/
 */
const ax = axios.create({baseURL: API_URL.href, withCredentials: true});
ax.interceptors.request.use(requestHandler);
ax.interceptors.response.use(responseHandler, responseErrorHandler);

/**
 * Запрос регистрации
 * @param data  Информация о пользователе
 */
export async function signUp(data: ApiSignUpRequest): Promise<boolean> {
    const response = await ax.post<ApiSignUpResponce>('/auth/signup', data, {
        responseType: 'text'
    });

    return Boolean(response.data.id) || Promise.reject(response);
}

/**
 * Запрос авторизации
 * @param data  Логин и пароль
 */
export async function signIn(data: ApiSignInRequest): Promise<boolean> {
    const response = await ax.post<string>('/auth/signin', data, {
        responseType: 'text'
    });

    return response.data === 'OK' || Promise.reject(response);
}

/**
 * Запрос выхода из системы
 */
export async function signOut(): Promise<boolean> {
    const response = await ax.post<string>('/auth/logout', null, {
        responseType: 'text'
    });

    return response.data === 'OK' || Promise.reject(response);
}

/**
 * Запрос информации о пользователе
 * @return  Информация о пользователе
 */
export async function getUserInfo(): Promise<ApiUserInfo> {
    const response = await ax.get<ApiUserInfo>('/auth/user');

    return getWithUpdatedAvatarPath(response.data);
}

/**
 * Запрос обновления информации о пользователе
 * @param data  Новая информация о пользователе
 * @return      Информация о пользователе
 */
export async function updateUserInfo(data: ApiUserInfo): Promise<ApiUserInfo> {
    const response = await ax.put<ApiUserInfo>('/user/profile', data);

    return getWithUpdatedAvatarPath(response.data);
}

/**
 * Запрос обновления аватара пользователя
 * @param data  Форма с файлом аватара
 * @return      Информация о пользователе
 */
export async function updateUserAvatar(data: FormData): Promise<ApiUserInfo> {
    const response = await ax.put<ApiUserInfo>('/user/profile/avatar', data);

    return getWithUpdatedAvatarPath(response.data);
}

/**
 * Запрос обновления пароля пользователя
 * @param data  Пара старый/новый пароль пользователя
 */
export async function updateUserPassword(data: ApiChangePasswordRequest): Promise<boolean> {
    const response = await ax.put<string>('/user/password', data, {
        responseType: 'text'
    });

    return response.data === 'OK' || Promise.reject(response);
}

export const LEADERBOARD_URL = '/leaderboard';

/**
 * Запрос на добавление в таблицу рекордов
 * @param data Объект ответа API с информацией о персонаже в формате @see GameCharacterInfo
 */
export async function addToLeaderboard(data: ApiAddToLeaderboardRequest): Promise<boolean> {
    const response = await ax.post<string>(LEADERBOARD_URL, data, {
        responseType: 'text'
    });

    return response.data === 'OK' || Promise.reject(response);
}

/**
 * Запрос на получение таблицы рекордов
 * @param data  Объект запроса API таблицы рекотров
 * @return      Данные из таблицы рекордов
 */
export async function getLeaderboard(data: ApiGetLeaderboardRequest): Promise<ApiGetLeaderboardResponse> {
    if (navigator) {
        navigator.serviceWorker?.controller?.postMessage({url: '/leaderboard/all', payload: data});
    }

    const response = await ax.post<ApiGetLeaderboardResponse>('/leaderboard/all', data);

    return response.data;
}

/**
 * Запрос на serviceID для использования в Oauth
 */
export async function getServiceId(): Promise<string> {
    const response = await ax.get<ApiServiceIdResponse>('/oauth/yandex/service-id');

    return response.data.service_id;
}

/**
 * Аутентификация в API через код с сервиса Oauth
 */
export async function authWithCode(code: string): Promise<boolean> {
    const response = await ax.post<string>(
        '/oauth/yandex',
        {
            code
        },
        {
            responseType: 'text'
        }
    );

    return response.data === 'OK' || Promise.reject(response);
}

/**
 * Перехватчик запросов на сервер. Позволяет выполнять обработку всех запросов
 * до отправки в сетевой стэк
 * @param request   Объект конфигурации запроса на сервер
 */
function requestHandler(request: AxiosRequestConfig): AxiosRequestConfig {
    request.headers.common['x-perf'] = performanceCheckStart(request.url);
    // eslint-disable-next-line no-console
    console.log('[API req]', request);

    return request;
}

/**
 * Перехватчик ответов от сервера. Позволяет выполнять обработку всех ответов
 * до возвращения в промис вызвавшего метода
 * @param response  Объект ответ от сервера
 */
function responseHandler<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    // eslint-disable-next-line no-console
    console.log('[API resp]', response);

    const perfUniqueName = response.config.headers['x-perf'];
    performanceCheckEnd(perfUniqueName);

    return response;
}

/**
 * Перехватчик ошибок от сервера. Позволяет выполнять обработку всех ошибок,
 * до возвращения в промис вызвавшего метода
 * @param response  Объект ошибки от сервера
 */
function responseErrorHandler(responseError: AxiosError<unknown>): Promise<ApiBadRequestError> {
    let badRequestError: ApiBadRequestError;

    if (responseError.response) {
        if (responseError.request.responseType === 'text' && typeof responseError.response.data === 'string') {
            try {
                badRequestError = JSON.parse(responseError.response.data);
            } catch (error) {
                // Несмотря на описание Api, формат ошибок иногда не такой как должен быть
                badRequestError = {
                    reason: responseError.response.data
                };
            }
        } else {
            badRequestError = responseError.response.data as ApiBadRequestError;
        }

        if (badRequestError) {
            badRequestError.status = responseError.response.status;
        }
    } else {
        badRequestError = {
            reason: 'API Error'
        };
    }

    // eslint-disable-next-line no-console
    console.error('[API error]', badRequestError, responseError.response);

    return Promise.reject(badRequestError);
}

/**
 * Утилитный метод, изменяющий пути до аватаров на сервере с относительного адреса, на абсолютный.
 * Необходим, т.к. пути возвращаемые сервером невозможно использвать в чистом виде
 * @param objectWithAvatar  Объект содержащий аватар
 */
function getWithUpdatedAvatarPath(objectWithAvatar: ApiUserInfo) {
    const {avatar} = objectWithAvatar;

    return {
        ...objectWithAvatar,
        avatar: avatar && avatar.startsWith('/') ? `${API_URL.origin}${avatar}` : avatar
    };
}
