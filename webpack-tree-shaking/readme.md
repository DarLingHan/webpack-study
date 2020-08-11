## tree shaking
- 删除Javascript上下文中的未引用代码

# side-effect-free无副作用
- 1. 通过 package.json 的 "sideEffects" 属性,提示 webpack compiler 哪些代码是“纯粹部分”,告知 webpack，它可以安全地删除未用到的 export。
- 2. 还可以在 module.rules 配置选项 中设置 "sideEffects"。

# 利用 tree shaking 的优势， 你必须...总结1
- 使用 ES2015 模块语法（即 import 和 export）
- 确保没有编译器将您的 ES2015 模块语法转换为 CommonJS 的（顺带一提，这是现在常用的 @babel/preset-env 的默认行为，详细信息请参阅文档）。
- 在项目的 package.json 文件中，添加 "sideEffects" 属性。
- 使用 mode 为 "production" 的配置项以启用更多优化项，包括压缩代码与 tree shaking。

# tree-shaking如何工作
- tree-shaking只能在静态模块下工作，ES6模块加载是静态的，因此整个依赖树可以被静态地推导出 解析语法树。所以在ES6中使用tree shaking非常容易。
- 在ES6以前，我们可以使用CommonJS引入模块：require()，这种引入是动态的，也意味着我们可以基于条件来导入需要的代码；CommonJS的动态特性模块意味着tree shaking不适用。因为它是不可能确定哪些模块实际运行之前是需要的或者是不需要的。
- ES6的import语法完美可以使用tree shaking，因为可以在代码不运行的情况下就能分析出不需要的代码。

# tree shaking总结2
- tree shaking 不支持动态导入（如CommonJS的require()语法），只支持纯静态的导入（ES6的import/export）
- webpack中可以在项目package.json文件中，添加`sideEffects`属性，手动指定有副作用的脚本

