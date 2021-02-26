import {PerfomanceItem} from './types';

const measures: PerfomanceItem[] = [];
let lastId = 0;
export const performanceCheckStart = (url = 'Unknown URL'): string => {
    lastId++;
    const uniqueName = url + lastId;
    performance.measure(uniqueName);
    measures.push({url, uniqueName});

    return uniqueName;
};
export const performanceCheckEnd = (uniqueName: string | undefined): void => {
    if (!uniqueName) {
        return;
    }
    const item = measures.find((a: PerfomanceItem) => a.uniqueName === uniqueName);
    const measure = performance.getEntriesByName(uniqueName);
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
    performance.clearMeasures(item.uniqueName);
};

const warningActions = (item: PerfomanceItem): void => {
    window.ym(71737372, 'reachGoal', 'apiRequestTimeout', {url: item.url});
};
