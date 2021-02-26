import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';

import {HTTP_CODE} from './httpCodes';

/**
 * Middleware для обработки ошибок из валидатора
 * @param req   Запрос
 * @param res   Ответ
 * @param next  Вызов след. middleware
 */
export const validatorResultMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        next();
    } else {
        res.status(HTTP_CODE.BAD_REQUEST).json({errors: result.array()});
    }
};

// TODO необходимо сделать нормальное завершение работы
export const onShutDown = (cb: () => void): void => {
    process.on('SIGTERM', cb);
    process.on('SIGINT', cb);
};

/**
 * Таймаут с промисом
 * @param timeout Время таймаута в ms
 */
export const timer = async (timeout: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, timeout));

/**
 * Реализация цикла попыток подключения к БД
 * @param count Кол-во попыток
 * @param timeout Таймаут между попытками
 * @param fn Функция для повторения
 */
export const retryConnect = async <T>(
    count: number,
    timeout: number,
    fn: () => Promise<T | undefined>
): Promise<T | undefined> => {
    let c = count;
    /* eslint-disable no-await-in-loop */
    while (c--) {
        try {
            return await fn();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Reconnecting...');

            await timer(timeout);
        }
    }

    return undefined;
};
