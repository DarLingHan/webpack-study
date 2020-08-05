const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
        // dongtai: './src/dongtai.js'
        // index: './src/index.js',
        // another: './src/another-module.js',
        // index: { import: './src/index.js', dependOn: 'shared' },
        // another: { import: './src/another-module.js', dependOn: 'shared' },
        // shared: 'lodash'
    },
    output: {
        filename: '[name].bundle.js',
        // chunkFilename: '[name].bundle.js', // chunkFilename，决定 non-entry chunk(非入口 chunk) 的名称。
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}
