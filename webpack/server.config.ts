import path from 'path';

import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';

import cssLoader from './loaders/css';
import fileLoader from './loaders/file';
import fontLoader from './loaders/font';
import jsLoader from './loaders/js';

const config: Configuration = {
    name: 'server',
    target: 'node',
    node: {__dirname: false},
    entry: path.resolve('server', 'src', 'index'),
    output: {
        path: path.resolve('dist', 'server'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '~~': path.resolve('server', 'src'),
            '~': path.resolve('app', 'src')
        }
    },
    externals: [nodeExternals({allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i]})],
    devtool: 'source-map',
    module: {
        rules: [jsLoader.server, cssLoader.server, fileLoader.server, fontLoader.server]
    }
};

export default config;
