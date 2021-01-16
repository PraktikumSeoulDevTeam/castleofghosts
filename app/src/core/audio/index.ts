import {controlClick} from './click';
import {controlGameLoop, playGameLoopQueue} from './gameLoop';
import {controlLoose} from './loose';
import {audioCtx} from './utils';
import {controlWin} from './win';

import type {SampleControl} from './types';

/**
 * Изменение состояния аудио контекста
 * Так же выполняется запуск незапущенных зацикленных сэмплов
 * @param newState  Новое состояние аудио контекста
 */
export function switchState(newState: AudioContextState): void {
    if (newState === 'running' && audioCtx.state === 'suspended') {
        audioCtx.resume();
        // TODO пока не решил как сделать лучше
        playGameLoopQueue();
    }
    if (newState === 'suspended' && audioCtx.state === 'running') {
        audioCtx.suspend();
    }
}

/**
 * Изменение состояния аудио контрольного аудио сэмпла
 * @param control   Объект с параметрами запуска
 */
export function sampleControl(control: SampleControl): void {
    switch (control.sample) {
        case 'CLICK': {
            controlClick(control);
            break;
        }
        case 'GAME_LOOP': {
            controlGameLoop(control);
            break;
        }
        case 'WIN': {
            controlWin(control);
            break;
        }
        case 'LOOSE': {
            controlLoose(control);
            break;
        }
        default:
    }
}
