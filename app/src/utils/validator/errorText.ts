export default function getText(fieldName: string, arg?: string): string {
    switch (fieldName) {
        case 'required':
            return `Поле обязательно для заполнения`;
        case 'min-length':
            return `Поле не должно быть короче ${arg} символов`;
        case 'max-length':
            return `Поле не должно быть длиннее ${arg} символов`;
        case 'email':
            return `Некорректный email адрес`;
        default:
            return `Некорректное значение`;
    }
}
