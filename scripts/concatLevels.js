const fs = require('fs');
const path = require('path');

const levels = [];

/**
 * Чтение каталога в цикле и вызов функции на каждый файл в нем
 * @param {string} dir Путь к каталогу
 * @param {RegExp} filter Фильтр названия файлов
 * @param {Function} callback Callback, который должен вызываться для каждого файла в каталоге
 */
function readDir(dir, filter = /\.json$/, callback) {
    if (!fs.existsSync(dir)) {
        // eslint-disable-next-line no-console
        console.log('No dir found', dir);

        return;
    }

    if (!fs.lstatSync(dir).isDirectory()) {
        // eslint-disable-next-line no-console
        console.log('Not a dir', dir);

        return;
    }

    const files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(dir, files[i]);
        if (filter.test(filename)) {
            callback(filename);
        }
    }
}

/**
 * Чтение, парсинг входного файла и добавление JSON в результирующий массив
 * @param {string} filename Название входного файла
 */
function concatLevel(filename) {
    const buf = fs.readFileSync(filename).toString();
    const json = JSON.parse(buf);
    levels.push(json);
}

/**
 * Запись результата в файл с массивом уровней
 * @param {string} dir Путь к каталогу для записи файла с результатом
 */
function writeToFile(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFileSync(path.join(dir, 'levels.json'), JSON.stringify(levels));
}

readDir(process.argv[2] || './app/levels', /\.json$/, concatLevel);
writeToFile(process.argv[3] || './tmp');
