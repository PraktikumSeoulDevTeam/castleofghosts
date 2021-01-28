import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    client: {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },
    server: {
        test: /\.scss$/i,
        use: 'null-loader'
    }
};
