import {ToasterAddAction, TOASTER_ACTION_TYPES, ToasterAction, Toast} from './types';

export function toasterAddAction(toast: Toast): ToasterAddAction {
    return {
        type: TOASTER_ACTION_TYPES.ADD_TOASTER,
        payload: toast
    };
}

export function toasterRemoveAction(id: number): ToasterAction {
    return {
        type: TOASTER_ACTION_TYPES.REMOVE_TOASTER,
        payload: id
    };
}
