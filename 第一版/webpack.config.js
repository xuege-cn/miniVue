const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './example.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './index.html'
    //     })
    // ]
}