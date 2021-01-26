/* eslint-disable camelcase */

import {AxiosRequestConfig, AxiosResponse} from 'axios';

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

export interface AxiosRequestConfigWithHash extends AxiosRequestConfig {
    hash?: string;
}

export interface AxiosResponseWithHash<T> extends AxiosResponse<T> {
    config: AxiosRequestConfigWithHash;
}
