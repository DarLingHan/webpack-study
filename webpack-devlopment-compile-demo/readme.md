## 环境配置
- mode: 'development'

## source map
- 错误源码追踪
- devtool: 'inline-source-map'

## 文件发生变更时，自动编译代码，三种监听模式
告知 CleanWebpackPlugin 你不想在 watch 触发增量构建后删除 index.html 文件
配置 `new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })`
- 1. webpack watch mode 监听文件的更改 (观察模式)
- 2. webpack-dev-serve 提供一个简单的web serve，并且具有实时重新加载的功能
    文件更改后，除了自动编译代码外，浏览器也会自动刷新。
    `devServe: {
        contentBase: './dist'
    }`
    以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下。
- 3. webpack-dev-middleware 一个封装器，将webpack处理过的文件发送到一个server,可以作为单独的package使用。比如webpack-dev-middleware结合express server使用
    貌似不能自动刷新浏览器
    
