const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 用新生成的html替换dist下原有的html
// 所有的bundle会被自动添加到html中

module.exports = {
    entry: './src/index.js',
    output: {
        /**
         * [xx] 可替换模版字符串
         * [contenthash]substitution将根据资源内容创建出唯一的hash,当资源内容发生变更时，[contenthash]也会发生变化
         */
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '缓存-Caching'
        })
    ],
    optimization: {
        moduleIds: 'hashed', // 第三方库，因为解析顺序的原因，id不应该发生变化。
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}
