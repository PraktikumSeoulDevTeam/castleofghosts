import {SampleContainer} from './types';

export const audioCtx = new AudioContext();

/**
 * Загрузка файла с семплом через fetch
 * @param filepath  Путь к файлу м мэмплом
 * @returns         Промис буффера с аудио сэмплом или ничего
 */
export async function getSampleFile(filepath: string): Promise<AudioBuffer | undefined> {
    try {
        const response = await fetch(filepath);
        if (response && response.ok) {
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

            return audioBuffer;
        }
        throw new Error('File not fetched');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[Audio API] Sample file load error: ', error, filepath);

        return undefined;
    }
}

/**
 * Создание буффер ноды и запуск сэмпла
 * Если контекст находится не в запущенном состоянии
 * выполняются действия только для зацикленных семплов
 * @param audioBuffer   Буффер с аудио сэмплом
 * @param loop          Нужно ли зациклить сэмпл
 * @returns             Контейнер с нодой аудио буффера и временем старта сэмпла; или ничего;
 */
export function playSample(audioBuffer: AudioBuffer, loop = false): SampleContainer | undefined {
    let startTime;
    if (loop || audioCtx.state === 'running') {
        const node = audioCtx.createBufferSource();
        node.loop = loop;
        node.buffer = audioBuffer;
        node.connect(audioCtx.destination);
        node.onended = () => node.disconnect();
        if (audioCtx.state === 'running') {
            node.start();
            startTime = audioCtx.currentTime;
        }

        return {node, startTime};
    }

    return undefined;
}

/**
 * Остановка и отключение ноды
 * @param container Контейнер, ноду в котором остановить
 */
export function stopSample(container?: SampleContainer): undefined {
    if (container) {
        if (container.startTime && container.startTime < audioCtx.currentTime) {
            container.node.stop();
        }
        container.node.disconnect();
    }

    return undefined;
}
