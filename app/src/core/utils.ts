import {CanvasContext} from './types';

/**
 * Создает контекст для canvas HTML элемента
 * @param canvasElement HTML элемент канваса в DOM
 */
export function setCanvas(canvasElement: HTMLCanvasElement | null): CanvasContext | never {
    if (!canvasElement) {
        throw new Error('No canvas found');
    }
    const ctx = canvasElement.getContext('2d');
    if (!ctx) {
        throw new Error('No canvas context found');
    }
    ctx.imageSmoothingEnabled = false;

    return {
        ctx,
        width: canvasElement.width,
        height: canvasElement.height
    };
}
