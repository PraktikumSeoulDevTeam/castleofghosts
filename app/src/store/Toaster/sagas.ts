import {ForkEffect, put, takeLeading, delay} from 'redux-saga/effects';
import {toasterCreateAction, toasterRemoveAction} from './actions';
import {ToasterAddAction, TOASTER_ACTION_TYPES} from './types';

const DEFAULT_TOAST_ACTIVE_TIME = 3000;

export function* toasterWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(TOASTER_ACTION_TYPES.ADD_TOASTER, toasterAdd);
}

function* toasterAdd(action: ToasterAddAction) {
    const toasterId = `${Date.now()}_${Math.trunc(Math.random() * Date.now())}`;

    yield put(
        toasterCreateAction({
            id: toasterId,
            text: action.payload.text,
            duration: action.payload.duration ?? DEFAULT_TOAST_ACTIVE_TIME
        })
    );

    yield delay(action.payload.duration ?? DEFAULT_TOAST_ACTIVE_TIME);
    yield put(toasterRemoveAction(toasterId));
}
