export default {
    client: {
        test: /\.(woff2)$/,
        use: ['file-loader']
    },
    server: {
        test: /\.scss$/i,
        use: 'null-loader'
    }
};
