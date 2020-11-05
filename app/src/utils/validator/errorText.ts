export default function getText(
    fieldName: string,
    arg?: string
): {
    ru: string;
} {
    switch (fieldName) {
        case 'required':
            return {
                ru: `Поле обязательно для заполнения`
            };
        case 'min-length':
            return {
                ru: `Поле не должно быть короче ${arg} символов`
            };
        case 'max-length':
            return {
                ru: `Поле не должно быть длиннее ${arg} символов`
            };
        case 'email':
            return {
                ru: `Некорректный email адрес`
            };
        default:
            return {
                ru: `Некорректное значение`
            };
    }
}
