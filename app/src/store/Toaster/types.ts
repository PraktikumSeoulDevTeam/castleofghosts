export interface Toast {
    id: string;
    text: string;
    duration: number; // in ms
}

export interface ToasterState {
    toastes: Toast[];
}

export const enum TOASTER_ACTION_TYPES {
    ADD_TOASTER = 'cost/toaster/add',
    REMOVE_TOASTER = 'cost/toaster/remove'
}

export interface ToasterAddAction {
    type: TOASTER_ACTION_TYPES.ADD_TOASTER;
    payload: {
        text: string;
        duration: number;
    };
}

export interface ToasterRemoveAction {
    type: TOASTER_ACTION_TYPES.REMOVE_TOASTER;
    payload: string;
}

export type ToasterAction = ToasterAddAction | ToasterRemoveAction;
