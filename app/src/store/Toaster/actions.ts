import {ToasterAddAction, TOASTER_ACTION_TYPES, ToasterAction, ToasterCreateAction} from './types';

export function toasterAddAction({text, duration}: {text: string; duration?: number}): ToasterAddAction {
    return {
        type: TOASTER_ACTION_TYPES.ADD_TOASTER,
        payload: {
            text,
            duration: duration ?? 1000
        }
    };
}

export function toasterCreateAction({
    text,
    duration,
    id
}: {
    text: string;
    id: string;
    duration?: number;
}): ToasterCreateAction {
    return {
        type: TOASTER_ACTION_TYPES.CREATE_TOASTER,
        payload: {
            text,
            id,
            duration: duration ?? 1000
        }
    };
}

export function toasterRemoveAction(id: string): ToasterAction {
    return {
        type: TOASTER_ACTION_TYPES.REMOVE_TOASTER,
        payload: id
    };
}
