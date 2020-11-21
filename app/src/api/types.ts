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
 * Запрос смены пароля
 */
export interface ApiChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

/**
 * Запрос регистрации
 */
export interface ApiSignUpRequest {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

/**
 * Ответ на запрос регистрации
 */
export interface ApiSignUpResponce {
    id: number;
}

/**
 * Запрос аутентификации
 */
export interface ApiSignInRequest {
    login: string;
    password: string;
}

/**
 * Информация о персонаже
 */
export interface ApiCharacterInfo {
    id: number;
    name: string;
    points: number;
}

/**
 * Запрос на добавление в таблице рекордов
 */
export interface ApiAddToLeaderboardRequest {
    ratingFieldName: string;
    data: ApiUserInfo; // TODO нужно выяснить формат
}

/**
 * Запрос таблицы рекордов
 */
export interface ApiGetLeaderboardRequest {
    ratingFieldName: string;
    cursor: number;
    limit: number;
}

/**
 * Ответ на запрос таблицы рекордов
 */
export type ApiGetLeaderboardResponse = ApiUserInfo[]; // TODO нужно выяснить формат

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
