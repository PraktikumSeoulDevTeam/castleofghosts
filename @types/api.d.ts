/* eslint-disable camelcase */

/**
 * Формат объекта 'пользователь' API
 * Запрос обновления информации по пользователю
 * Ответ на запрос обновления информации по пользователю
 */
export interface ApiUserInfo {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone?: string;
    avatar?: string;
}

/**
 * Ответ сервера с ошибкой
 */
export interface ApiBadRequestError {
    reason: string;
    body?: {
        description: string;
    };
    status?: number;
}

interface ApiDbFields {
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface ApiForumUser extends ApiDbFields {
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ApiForumTopicCreateRequest {
    header: string;
    text: string;
}

export interface ApiForumTopicResponse extends ApiDbFields, ApiForumTopicCreateRequest {
    user: ApiForumUser;
}

export interface ApiForumPostCreateRequest {
    text: string;
}

export interface ApiForumPostResponse extends ApiDbFields, ApiForumPostCreateRequest {
    user: ApiForumUser;
}

export interface ApiFeedbackCreateRequest {
    text: string;
}
