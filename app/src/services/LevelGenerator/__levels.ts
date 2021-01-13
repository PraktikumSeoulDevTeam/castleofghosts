import type {BackgroundMap, CharsMap, ObjectsMap} from '~/store/Level/types';

export interface DefaultLevel {
    startPoint: [number, number];
    endPoint: [number, number];
    map: number[][];
    completeMap?: BackgroundMap;
    completeObjects?: ObjectsMap;
    completeChars?: CharsMap;
}

// 24x32
const FirstLevel: DefaultLevel = {
    startPoint: [1, 0],
    endPoint: [22, 30],
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

const SecondLevel: DefaultLevel = {
    startPoint: [2, 0],
    endPoint: [15, 30],
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

const LevelLondon: DefaultLevel = {
    startPoint: [1, 1],
    endPoint: [21, 31],
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

const LevelParis: DefaultLevel = {
    startPoint: [12, 16],
    endPoint: [10, 14],
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

const LevelMadrid: DefaultLevel = {
    startPoint: [1, 1],
    endPoint: [23, 30],
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

// by Artyom
const ThirdLevel: DefaultLevel = {
    startPoint: [0, 0],
    endPoint: [1, 1],
    map: [],
    completeMap: [
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {}
        ],
        [
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {}
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'LEDGE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_RIGHT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'CROSS_LEFT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_RIGHT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CROSS_LEFT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_RIGHT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_RIGHT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'LEDGE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'VERTICAL'},
                canWalk: true,
                width: 1,
                height: 3
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'FLOOR', part: 'HORIZONTAL'},
                canWalk: true,
                width: 3,
                height: 1
            },
            {canWalk: true, width: 3, height: 1},
            {canWalk: true, width: 3, height: 1},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CROSS_LEFT'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {}
        ],
        [
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 1, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'LEDGE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'ROOM'},
                canWalk: true,
                width: 3,
                height: 3
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {canWalk: true, width: 3, height: 3},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CROSS_BOTTOM'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_TL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            }
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'FLOOR', part: 'SINGLE'},
                canWalk: true,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'SIDE'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'WALL', part: 'CORNER_BL'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'TOP'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {
                asset: {type: 'WALL', part: 'CORNER_BR'},
                canWalk: false,
                width: 1,
                height: 1
            },
            {},
            {},
            {},
            {}
        ]
    ],
    completeObjects: [
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {
                asset: {type: 'OBJECT', part: 'KEY'},
                role: 3,
                canWalk: true
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'OBJECT', part: 'DOOR'},
                role: 2,
                canWalk: true
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    ],
    completeChars: [
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'CHAR', part: 'SPIRIT'},
                role: 1,
                canWalk: false
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'CHAR', part: 'SPIRIT'},
                role: 1,
                canWalk: false
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'CHAR', part: 'SPIRIT'},
                role: 1,
                canWalk: false
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'CHAR', part: 'SPIRIT'},
                role: 1,
                canWalk: false
            },
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {
                asset: {type: 'CHAR', part: 'SPIRIT'},
                role: 1,
                canWalk: false
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                asset: {type: 'OBJECT', part: 'SPAWN'},
                role: 4,
                canWalk: true
            },
            {},
            {},
            {},
            {},
            {}
        ],
        [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    ]
};

export const Levels: DefaultLevel[] = [FirstLevel, SecondLevel, ThirdLevel, LevelLondon, LevelMadrid, LevelParis];
