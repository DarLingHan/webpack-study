## 创建library
- 1. 外部化第三方库lodash——externals
- 2. 设置打包的名称`test-library`
- 3. 将library暴露给一个名为`XX`的属性
- 4. 能够访问其他Node.js中的library

## 使用者通过以下方式访问library
- 1. es5 import XX from 'test-library'
- 2. commonjs require('test-library')
- 3. 全局变量，通过script标签引入

## 多个library外部化时
- externals中通过正则表达式排除它们

## 暴露library
- 在output中配置library属性的值为 `XX`
- 这会将你的 library bundle 暴露为名为 `XX` 的全局变量，consumer 通过此名称来 import
## 兼容不同的环境
- 希望它们兼容不同的环境——CommonJs\AMD\Node.js或者作为一个全局变量
- 配置`libraryTarget`属性


### 步骤
- 1. 编写library代码
- 2. 暴露library
- 3. 配置library兼容不同的环境
- 4. 发布library

