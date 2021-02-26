/* eslint-disable camelcase */

import type {GameCharacterInfo} from '../core/types';

export type {ApiUserInfo, ApiBadRequestError} from '@/api.d';

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
    ratingFieldName: 'cogTime';
    data: GameCharacterInfo;
}

/**
 * Запрос таблицы рекордов
 */
export interface ApiGetLeaderboardRequest {
    ratingFieldName: 'cogTime';
    cursor: number;
    limit: number;
}

/**
 * Объект из таблицы рекордов на сервере
 */
export interface ApiGetLeaderboardResponseElement {
    data: GameCharacterInfo;
}

/**
 * Ответ на запрос таблицы рекордов
 * Возвращает сортированный список объектов с информацией о персонаже
 */
export type ApiGetLeaderboardResponse = ApiGetLeaderboardResponseElement[];

/**
 * Ответ на запрос получения serviceID
 */
export interface ApiServiceIdResponse {
    service_id: string;
}
