import {call, ForkEffect, put, takeLeading} from 'redux-saga/effects';
import {getUser} from '../../api/Auth';
import {userRemoveAction, userUpdateAction} from './actions';
import {SignInAction, USER_ACTION_TYPES} from './types';

export function* userWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(USER_ACTION_TYPES.SIGN_IN, userSignInWorker);
    yield takeLeading(USER_ACTION_TYPES.SIGN_OUT, userSignOutWorker);
}

function* userSignInWorker(action: SignInAction) {
    const user = yield call(getUser, action.payload);
    yield put(userUpdateAction(user));
}

function* userSignOutWorker() {
    yield put(userRemoveAction());
}
