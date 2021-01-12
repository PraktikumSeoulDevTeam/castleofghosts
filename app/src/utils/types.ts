export interface FieldFormatBundle {
    [fiels: string]: [regexp: RegExp, message: string];
}

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
