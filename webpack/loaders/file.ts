export default {
    client: {
        test: /\.(png|svg|jpg|jpeg|gif|ico|ogg|mp3|wav)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=assets/[name].[ext]']
    },
    server: {
        test: /\.scss$/i,
        use: 'null-loader'
    }
};
