import {ToasterAddAction, TOASTER_ACTION_TYPES, ToasterAction} from './types';

export function toasterAddAction({text, duration}: {text: string; duration?: number}): ToasterAddAction {
    return {
        type: TOASTER_ACTION_TYPES.ADD_TOASTER,
        payload: {
            text,
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
