import isEmpty from '../../isEmpty';

export default function isEmailt(val: string): boolean {
    if (isEmpty(val)) return false;

    return val.includes('@');
}
