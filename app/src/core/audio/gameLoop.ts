import {getSampleFile, playSample, stopSample} from './utils';

import type {SampleControl} from './types';

const samplePromise = getSampleFile('./assets/loop.ogg');

let node: AudioBufferSourceNode | undefined;

export function play(): void {
    samplePromise.then((sample) => {
        if (sample) {
            node = playSample(sample, true) || node;
        }
    });
}

/**
 * Отдельный старт нужен если включили звук после того как был создан буффер
 */
export function playGameLoopQueue(): void {
    try {
        if (node) {
            node.start();
        }
        // Тут почти всегда будет ошибка, но это нормально
        // eslint-disable-next-line no-empty
    } catch (error) {}
}

function stop(): void {
    node = stopSample(node);
}

export function controlGameLoop(control: SampleControl): void {
    if (control.action === 'PLAY') {
        play();
    } else {
        stop();
    }
}
