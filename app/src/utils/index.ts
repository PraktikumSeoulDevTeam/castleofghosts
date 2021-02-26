import type {Entries, FieldFormatBundle} from './types';

export const FORMAT: FieldFormatBundle = {
    PHONE: [/^(8|\+7)\d{10}$/, 'Format does not match: +79091234567 or 89091234567']
};

export const entries = <T>(obj: T): Entries<T> => Object.entries(obj) as Entries<T>;

/**
 * Выполнить переход на страницу аутентификации Yandex OAuth
 * @param serviceId ID сервиса для авторизации
 */
export const redirectToYandexOAuth = async (serviceId: string): Promise<void> => {
    const redirectUri = encodeURI(`${window.location.origin}/`);
    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${redirectUri}`;
    try {
        document.location.href = url;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

/**
 * Получить значение параметра запроса из адресной строки по его названию
 * @param param Название параметра
 */
export const getQueryParam = (param: string): string | null => new URLSearchParams(window.location.search).get(param);

/**
 * Удаление параметров запроса из адресной строки
 */
export const clearQueryParams = (): void => window.history.replaceState({}, document.title, '/');

/**
 * Проверка среды исполнения: Сервер или браузер
 */
export const isServer = !(typeof window !== 'undefined' && window.document);
