import {getSampleFile, playSample, stopSample} from './utils';

import type {SampleContainer, SampleControl} from './types';

const samplePromise = getSampleFile('./assets/loop.ogg');

let container: SampleContainer | undefined;

export function play(): void {
    samplePromise.then((sample) => {
        if (sample) {
            container = playSample(sample, true) || container;
        }
    });
}

/**
 * Отдельный старт нужен если включили звук после того как был создан буффер
 */
export function playGameLoopQueue(currentTime?: number): void {
    try {
        if (container && !container.startTime) {
            container.node.start();
            container.startTime = currentTime;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[playGameLoopQueue] Error on loop start ', error);
    }
}

function stop(): void {
    container = stopSample(container);
}

export function controlGameLoop(control: SampleControl): void {
    if (control.action === 'PLAY') {
        play();
    } else {
        stop();
    }
}
