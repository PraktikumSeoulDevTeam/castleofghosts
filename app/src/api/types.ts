/* eslint-disable camelcase */

import type {GameCharacterInfo} from '../core/types';

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
 * Запрос на добавление в таблице рекордов
 */
export interface ApiAddToLeaderboardRequest {
    ratingFieldName: 'points';
    data: GameCharacterInfo;
}

/**
 * Запрос таблицы рекордов
 */
export interface ApiGetLeaderboardRequest {
    ratingFieldName: 'points';
    cursor: number;
    limit: number;
}

/**
 * Ответ на запрос таблицы рекордов
 * Возвращает сортированный список персонажей
 */
export type ApiGetLeaderboardResponse = GameCharacterInfo[];

/**
 * Ответ на запрос получения serviceID
 */
export interface ApiServiceIdResponse {
    service_id: string;
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
