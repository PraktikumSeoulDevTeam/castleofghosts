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
 * @returns             Нода с буффером аудио сэмпла или ничего
 */
export function playSample(audioBuffer: AudioBuffer, loop = false): AudioBufferSourceNode | undefined {
    if (loop || audioCtx.state === 'running') {
        const sample = audioCtx.createBufferSource();
        sample.loop = loop;
        sample.buffer = audioBuffer;
        sample.connect(audioCtx.destination);
        sample.onended = () => sample.disconnect();
        if (audioCtx.state === 'running') {
            sample.start();
        }

        return sample;
    }

    return undefined;
}

/**
 * Остановка и отключение ноды
 * @param node Нода, которую нужно остановить
 */
export function stopSample(node?: AudioBufferSourceNode): undefined {
    if (node) {
        node.stop();
        node.disconnect();
    }

    return undefined;
}
