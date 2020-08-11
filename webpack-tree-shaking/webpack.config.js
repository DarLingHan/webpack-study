const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    /**
     * 开发环境的tree-shaking
     */
    // mode: 'development',
    // optimization: {
    //     usedExports: true
    // }
    /**
     * 生产环境的tree-shaking做了什么
     */
    mode: 'production'
}