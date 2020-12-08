export interface Toast {
    id: number;
    text: string;
    duration: number; // in ms
}

export interface ToasterState {
    toastes: Toast[];
}

export const enum TOASTER_ACTION_TYPES {
    ADD_TOASTER = 'cog/toaster/add',
    CREATE_TOASTER = 'cog/toaster/create',
    REMOVE_TOASTER = 'cog/toaster/remove'
}

export interface ToasterAddAction {
    type: TOASTER_ACTION_TYPES.ADD_TOASTER;
    payload: Toast;
}

export interface ToasterRemoveAction {
    type: TOASTER_ACTION_TYPES.REMOVE_TOASTER;
    payload: number;
}

export type ToasterAction = ToasterAddAction | ToasterRemoveAction;
