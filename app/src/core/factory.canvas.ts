import {CanvasContext} from './types';

/**
 *
 * @param canvasElement
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
