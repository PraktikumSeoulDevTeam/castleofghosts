import {PerfomanceItem} from './types';

const measures: PerfomanceItem[] = [];

export const performanceCheckStart = (url = 'Unknown URL'): string => {
    const hash = generateUniqueID();
    performance.measure(hash);
    measures.push({url, hash});

    return hash;
};
export const performanceCheckEnd = (hash: string | undefined): void => {
    if (!hash) {
        return;
    }
    const item = measures.find((a: PerfomanceItem) => a.hash === hash);
    const measure = performance.getEntriesByName(hash);
    if (!item || !measure[0]) {
        return;
    }
    item.duration = measure[0].duration;
    checkAndDelete(item);
};

const DURATION_LIMIT = 10000;

const checkAndDelete = (item: PerfomanceItem): void => {
    if (item.duration && DURATION_LIMIT < item.duration) {
        warningActions(item);
    }
    performance.clearMeasures(item.hash);
};

const warningActions = (item: PerfomanceItem): void => {
    window.ym(71737372, 'reachGoal', 'apiRequestTimeout', {url: item.url});
};

const generateUniqueID = (): string =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
