import axios, {AxiosError, AxiosResponse} from 'axios';

import type {
    ApiBadRequestError,
    ApiFeedbackCreateRequest,
    ApiForumPostCreateRequest,
    ApiForumPostResponse,
    ApiForumTopicCreateRequest,
    ApiForumTopicResponse
} from '@/api.d';

const API_URL = new URL(`${window.location.origin}/api`);

/**
 * Клиент для локального API
 */
const ax = axios.create({baseURL: API_URL.href, withCredentials: true});
ax.interceptors.response.use(responseHandler, responseErrorHandler);

/**
 * Запрос создания топика на форуме
 * @param data  Данные для топика
 * @returns Топик
 */
export async function addTopic(data: ApiForumTopicCreateRequest): Promise<ApiForumTopicResponse> {
    const response = await ax.post<ApiForumTopicResponse>('/forum/topics', data);

    return response.data;
}

/**
 * Запрос на получение списка топиков форума
 * @returns Топики
 */
export async function getTopics(): Promise<ApiForumTopicResponse[]> {
    const response = await ax.get<ApiForumTopicResponse[]>('/forum/topics');

    return response.data;
}

/**
 * Запрос создания сообщения в топике на форуме
 * @param data  Данные для сообщения
 * @returns Сообщение
 */
export async function addPost(topicId: number, data: ApiForumPostCreateRequest): Promise<ApiForumPostResponse> {
    const response = await ax.post<ApiForumPostResponse>(`/forum/topics/${topicId}/posts`, data);

    return response.data;
}

/**
 * Запрос на получение списка сообщений топика форума
 * @returns Сообщения
 */
export async function getPosts(topicId: number): Promise<ApiForumPostResponse[]> {
    const response = await ax.get<ApiForumPostResponse[]>(`/forum/topics/${topicId}/posts`);

    return response.data;
}

/**
 * Запрос создания сообщения в топике на форуме
 * @param data  Данные для сообщения
 * @returns Сообщение
 */
export async function addFeedback(data: ApiFeedbackCreateRequest): Promise<boolean> {
    await ax.post<void>('/feedback', data);

    return true;
}

/**
 * Перехватчик ответов от сервера. Позволяет выполнять обработку всех ответов
 * до возвращения в промис вызвавшего метода
 * @param response  Объект ответ от сервера
 */
function responseHandler<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    // eslint-disable-next-line no-console
    console.log('[API resp]', response);

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
        if (typeof responseError.response.data === 'string') {
            badRequestError = {reason: responseError.response.data};
        } else {
            // TODO реализовать обработку ошибок вида express-validator
            badRequestError = {reason: 'Validation Error'};
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
