import {getSampleFile, playSample, stopSample} from './utils';

import type {SampleContainer, SampleControl} from './types';

const samplePromise = getSampleFile('./assets/win.ogg');

let container: SampleContainer | undefined;

function play(): void {
    samplePromise.then((sample) => {
        if (sample) {
            container = playSample(sample) || container;
        }
    });
}

function stop(): void {
    container = stopSample(container);
}

export function controlWin(control: SampleControl): void {
    if (control.action === 'PLAY') {
        play();
    } else {
        stop();
    }
}
