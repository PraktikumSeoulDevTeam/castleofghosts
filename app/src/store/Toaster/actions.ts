import {ToasterAddAction, TOASTER_ACTION_TYPES, ToasterAction, Toast} from './types';

export function toasterAddAction({text, duration, id}: Toast): ToasterAddAction {
    return {
        type: TOASTER_ACTION_TYPES.ADD_TOASTER,
        payload: {
            id,
            text,
            duration: duration ?? 1000
        }
    };
}

/* export function toasterCreateAction({text, duration, id}: Toast): ToasterCreateAction {
    return {
        type: TOASTER_ACTION_TYPES.CREATE_TOASTER,
        payload: {
            text,
            id,
            duration: duration ?? 1000
        }
    };
} */

export function toasterRemoveAction(id: number): ToasterAction {
    return {
        type: TOASTER_ACTION_TYPES.REMOVE_TOASTER,
        payload: id
    };
}
