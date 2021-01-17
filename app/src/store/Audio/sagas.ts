import {call, ForkEffect, takeLeading} from 'redux-saga/effects';

import {sampleControl, switchState} from '~/core/audio';

import {AudioControlSampleAction, AudioSetStateAction, AUDIO_ACTION_TYPES} from './types';

export function* audioWatcher(): Generator<ForkEffect<never>> {
    yield takeLeading(AUDIO_ACTION_TYPES.SET_STATE, audioStateWorker);
    yield takeLeading(AUDIO_ACTION_TYPES.CONTROL_SAMPLE, controlSampleWorker);
}

function* audioStateWorker(action: AudioSetStateAction) {
    yield call(switchState, action.payload);
}

function* controlSampleWorker(action: AudioControlSampleAction) {
    yield call(sampleControl, action.payload);
}
