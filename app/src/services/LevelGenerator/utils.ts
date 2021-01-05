export const exist = (arr: number[][], i: number, j: number): boolean =>
    i >= 0 && j >= 0 && arr[i] !== undefined && arr[i][j] !== undefined;

export const cellNeighborhoods = (i: number, j: number): number[][] => [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1]
];

export const existAndEqual = (arr: number[][], i: number, j: number, val: number): boolean =>
    exist(arr, i, j) && arr[i][j] === val;

export const sumOf = (arr: number[][], i: number, j: number, val: number): number => {
    const data = cellNeighborhoods(i, j);

    let sum = 0;
    for (let k = 0; k < data.length; k += 1) {
        const [x, y] = data[k];
        if (exist(arr, x, y) && arr[x][y] === val) {
            sum += 1;
        }
    }

    return sum;
};

export const allOneType = (arr: number[][], i: number, j: number, val: number): boolean => {
    const data = cellNeighborhoods(i, j);

    for (let k = 0; k < data.length; k += 1) {
        const [x, y] = data[k];
        if (exist(arr, x, y) && arr[x][y] !== val) {
            return false;
        }
    }

    return true;
};

export const randSort = (array: number[][]): number[][] => {
    const arr = array;
    for (let i = 0; i < arr.length; i += 1) {
        const rand = Math.floor(Math.random() * i);

        const tmp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = tmp;
    }

    return arr;
};
