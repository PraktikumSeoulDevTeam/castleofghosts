import type {Entries, FieldFormatBundle} from './types';

export const FORMAT: FieldFormatBundle = {
    PHONE: [/^(8|\+7)\d{10}$/, 'Format does not match: +79091234567 or 89091234567']
};

export const entries = <T>(obj: T): Entries<T> => Object.entries(obj) as Entries<T>;
