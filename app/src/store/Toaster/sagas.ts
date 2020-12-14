import {ForkEffect, put, takeLeading, delay} from 'redux-saga/effects';
import {toasterRemoveAction} from './actions';
import {ToasterAddAction, TOASTER_ACTION_TYPES} from './types';

const DEFAULT_TOAST_ACTIVE_TIME = 3000;

export function* toasterWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(TOASTER_ACTION_TYPES.ADD_TOASTER, toasterAdd);
}

function* toasterAdd(action: ToasterAddAction) {
    yield delay(action.payload.duration ?? DEFAULT_TOAST_ACTIVE_TIME);
    yield put(toasterRemoveAction(action.payload.id));
}
