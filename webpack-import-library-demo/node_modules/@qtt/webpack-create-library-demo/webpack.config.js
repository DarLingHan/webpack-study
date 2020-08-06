const path = require('path')
// 用新生成的html替换dist下原有的html
// 所有的bundle会被自动添加到html中

module.exports = [
    'source-map'
].map(devtool => ({
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'ling-library-demo1.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'lingsDream',
        libraryTarget: 'umd'
    },
    devtool,
    // optimization: {
    //     runtimeChunk: true // 单独分离出webpack的一些运行文件
    // },
    externals: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
        // 交给使用者来安装
        // 意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在 consumer 环境中必须存在且可用。
    }
}))
