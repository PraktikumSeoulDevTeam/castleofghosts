import isEmpty from '../../isEmpty';

export default function required(val: string): boolean {
    return !isEmpty(val);
}
