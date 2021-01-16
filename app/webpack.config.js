const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, '..', 'dist', 'app'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|ogg|mp3|wav)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=assets/[name].[ext]']
            },
            {
                test: /\.(woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'www', 'index.html')
        }),
        new MiniCssExtractPlugin()
    ]
};
