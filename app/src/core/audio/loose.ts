import {getSampleFile, playSample, stopSample} from './utils';

import type {SampleControl} from './types';

const samplePromise = getSampleFile('./assets/loose.wav');

let node: AudioBufferSourceNode | undefined;

function play(): void {
    samplePromise.then((sample) => {
        if (sample) {
            node = playSample(sample) || node;
        }
    });
}

function stop(): void {
    node = stopSample(node);
}

export function controlLoose(control: SampleControl): void {
    if (control.action === 'PLAY') {
        play();
    } else {
        stop();
    }
}
