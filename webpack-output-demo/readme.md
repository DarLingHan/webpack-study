## 管理输出
- 1. 随着应用程序增长，随着在文件名中使用`hash`并输出`多个bundle`时，在index.html中收入引入文件就会变的很困难————借助一些插件使过程更容易管控
- 2. index.html引用的时候构建重新生成的bundle文件名称，但是还是想引用旧的文件名称，借助`HtmlWebpackPlugin`插件来解决这个问题
    覆盖之前的html文件，自动加入bundle文件
- 3. 清理dist目录下多余的文件`clean-webpack-plugin`
- 4. `manifest`
    追踪所有模块到输出bundle之间的映射
    `webpackManifestPlugin`插件
    