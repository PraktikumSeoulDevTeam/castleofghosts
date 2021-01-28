import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import HookShellScriptPlugin from 'hook-shell-script-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {Configuration as WebpackConfiguration} from 'webpack';
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import cssLoader from './loaders/css';
import fileLoader from './loaders/file';
import fontLoader from './loaders/font';
import jsLoader from './loaders/js';

type Configuration = WebpackConfiguration & {
    devServer: DevServerConfiguration;
};

const config: Configuration = {
    name: 'client',
    entry: path.resolve('app', 'src', 'index'),
    output: {
        path: path.resolve('dist', 'app'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '~': path.resolve('app', 'src')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [jsLoader.client, cssLoader.client, fileLoader.client, fontLoader.client]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        publicPath: '/',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('app', 'www', 'index.html'),
            publicPath: '/'
        }),
        new MiniCssExtractPlugin(),
        new HookShellScriptPlugin({environment: ['node scripts/concatLevels.js ./app/levels ./tmp']}),
        new CopyPlugin({
            patterns: [{from: path.resolve('tmp', 'levels.json'), to: 'levels'}]
        })
    ]
};

export default config;
