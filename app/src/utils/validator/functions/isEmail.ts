import isEmpty from '../../isEmpty';

export default function isEmail(val: string): boolean {
    if (isEmpty(val)) {
        return false;
    }

    return val.includes('@');
}
