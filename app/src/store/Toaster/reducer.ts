import {cloneDeep} from 'lodash';
import {ToasterState, ToasterAction, TOASTER_ACTION_TYPES} from './types';

const inititalState: ToasterState = {
    toastes: []
};

export const toasterReducer = (state = inititalState, action: ToasterAction): ToasterState => {
    switch (action.type) {
        case TOASTER_ACTION_TYPES.ADD_TOASTER: {
            const newState = cloneDeep(state);
            newState.toastes.push(action.payload);

            return newState;
        }
        case TOASTER_ACTION_TYPES.REMOVE_TOASTER: {
            const newState = cloneDeep(state);
            newState.toastes = newState.toastes.filter((toast) => toast.id !== action.payload);

            return newState;
        }
        default:
            return state;
    }
};
