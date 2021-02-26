import http from 'http';
import https from 'https';

import {NextFunction, Request, Response} from 'express';

import {User, UserFields} from '~~/db/sequelize/models';

import {HTTP_CODE} from './httpCodes';

import type {ApiUserInfo} from '@/api.d';

const options: https.RequestOptions = {
    hostname: 'ya-praktikum.tech',
    port: 443,
    path: '/api/v2/auth/user',
    method: 'GET'
};

let userFields: UserFields;

export const getUserFields = (): UserFields => userFields;

/**
 * Middleware для получения информации о пользователе из Praktikum API
 * @param req   Запрос
 * @param res   Ответ
 * @param next  Вызов след. middleware
 */
export const getUserInfo = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.cookies || !req.cookies.uuid || !req.headers.cookie) {
        next({status: HTTP_CODE.UNAUTHORIZED});

        return;
    }
    const authRequest = https
        .request(
            {
                ...options,
                headers: {
                    Cookie: req.headers.cookie
                }
            },
            (message) => {
                let data = '';
                message.on('data', (chunk) => {
                    const errorStatus = statusCheck(message);
                    if (errorStatus) {
                        res.status(errorStatus);
                        authRequest.destroy(new Error(`Auth: ${errorStatus}`));
                    } else {
                        data += chunk;
                    }
                });
                message.on('end', () => {
                    const errorStatus = statusCheck(message);
                    if (errorStatus) {
                        res.status(errorStatus);
                        authRequest.destroy(new Error(`Auth: ${errorStatus}`));
                    } else {
                        const userInfo: ApiUserInfo = JSON.parse(data);
                        updateUserInfo(userInfo)
                            .then(() => next())
                            .catch(() => res.sendStatus(502));
                    }
                });
            }
        )
        .on('error', (error) => {
            // eslint-disable-next-line no-console
            console.error(error);
            next(error.message);
        });
    authRequest.end();
};

/**
 * Проверка статуса http сообщения
 * @param message Входящее http сообщение
 */
const statusCheck = (message: http.IncomingMessage): number => {
    // eslint-disable-next-line no-console
    console.log(`statusCode: ${message.statusCode}`);
    if (!message.statusCode) {
        return HTTP_CODE.INTERNAL_SERVER_ERROR;
    }
    if (message.statusCode >= HTTP_CODE.BAD_REQUEST) {
        return message.statusCode;
    }

    return 0;
};

/**
 * Обновление/создание пользователя в БД
 * @param userInfo Информация о пользователе из Praktikum API
 */
const updateUserInfo = async (userInfo: ApiUserInfo) => {
    const name = userInfo.display_name || `${userInfo.first_name} ${userInfo.second_name}`;
    if (userFields && userFields.name === name) {
        return;
    }
    try {
        const user = await User.findOne({where: {id: userInfo.id}});

        if (user) {
            await user.update({name});
            userFields = {
                id: user.id,
                name
            };
        } else {
            const newUser = await User.create({
                id: userInfo.id,
                name
            });
            userFields = {
                id: newUser.id,
                name: newUser.name
            };
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[updateUserInfo] Error: ', error);
    }
};
