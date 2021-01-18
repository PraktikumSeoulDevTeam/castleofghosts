import {getSampleFile, playSample, stopSample} from './utils';

import type {SampleContainer, SampleControl} from './types';

const samplePromise = getSampleFile('./assets/click.ogg');

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

export function controlClick(control: SampleControl): void {
    if (control.action === 'PLAY') {
        play();
    } else {
        stop();
    }
}
