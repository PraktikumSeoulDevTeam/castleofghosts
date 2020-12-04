import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ax} from './index';
import {store} from '../store';
import {toasterAddAction} from '../store/Toaster/actions';
import {ApiBadRequestError} from './types';

ax.interceptors.response.use(responseHandler, responseErrorHandler);
ax.interceptors.request.use(requestHandler);

/**
 * Перехватчик запросов на сервер. Позволяет выполнять обработку всех запросов
 * до отправки в сетевой стэк
 * @param request   Объект конфигурации запроса на сервер
 */
function requestHandler(request: AxiosRequestConfig): AxiosRequestConfig {
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

    return response;
}

/**
 * Перехватчик ошибок от сервера. Позволяет выполнять обработку всех ошибок,
 * до возвращения в промис вызвавшего метода
 * @param response  Объект ошибки от сервера
 */
function responseErrorHandler<T extends unknown>(responseError: AxiosError<T>): AxiosError<T> {
    let badRequestError: ApiBadRequestError;

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
    // eslint-disable-next-line no-console
    console.error('[API error]', badRequestError || responseError);

    store.dispatch(
        toasterAddAction({
            text: badRequestError.reason ?? 'Что-то пошло не так :(',
            duration: 2000
        })
    );

    return responseError;
}
