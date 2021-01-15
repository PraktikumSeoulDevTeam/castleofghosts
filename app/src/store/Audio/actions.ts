import {AudioControlSampleAction, AudioSetStateAction, AUDIO_ACTION_TYPES} from './types';
import type {SampleControl} from '~/core/audio/types';

export function audioSetStateAction(audioState: AudioContextState): AudioSetStateAction {
    return {
        type: AUDIO_ACTION_TYPES.SET_STATE,
        payload: audioState
    };
}

export function audioControlSampleAction(sampleControl: SampleControl): AudioControlSampleAction {
    return {
        type: AUDIO_ACTION_TYPES.CONTROL_SAMPLE,
        payload: sampleControl
    };
}
