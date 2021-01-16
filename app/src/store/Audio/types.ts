import {SampleControl} from '~/core/audio/types';

export const enum AUDIO_ACTION_TYPES {
    SET_STATE = 'cog/audio/set-state',
    CONTROL_SAMPLE = 'cog/audio/control-sample'
}

export interface AudioState {
    contextState: AudioContextState;
}

export interface AudioSetStateAction {
    type: AUDIO_ACTION_TYPES.SET_STATE;
    payload: AudioContextState;
}

export interface AudioControlSampleAction {
    type: AUDIO_ACTION_TYPES.CONTROL_SAMPLE;
    payload: SampleControl;
}

export type AudioActions = AudioSetStateAction | AudioControlSampleAction;
