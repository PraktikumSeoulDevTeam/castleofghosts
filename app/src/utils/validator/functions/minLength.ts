import isEmpty from '../../isEmpty';

export default function minLength(val: string, length: number): boolean {
    if (isEmpty(val)) {
        return false;
    }

    return val.length >= length;
}
