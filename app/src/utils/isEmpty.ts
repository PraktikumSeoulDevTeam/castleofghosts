export default function isEmpty(arg: unknown): boolean {
    if (arg === null || arg === undefined) {
        return true;
    }

    if (Array.isArray(arg) && !arg.length) {
        return true;
    }

    if (typeof arg === 'string' && !arg.length) {
        return true;
    }

    if (typeof arg === 'object' && arg && !Object.keys(arg).length) {
        return true;
    }

    return false;
}
