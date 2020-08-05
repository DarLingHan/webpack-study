## 缓存
- 1. `substitution` [xx] 可替换模版字符串
    [contenthash]substitution将根据资源内容创建出唯一的hash,当资源内容发生变更时，[contenthash]也会发生变化
- 2.  但是发现多次build,内容没变更当情况下，contenthash还是发生变化，是因为入口chunk中，包含了boilerplate(引导模版)

## 提取引导模版
- SplitChunksPlugin 可以用于将模块分离到单独的 bundle 中。
- 使用 optimization.runtimeChunk 选项将 runtime 代码拆分为一个单独的 chunk。将其设置为 single 来为所有 chunk 创建一个 runtime bundle。

## 通过splitchunk将第三方库提取到单独的 vendor chunk中
- 因为，它们很少像本地的源代码那样频繁修改。
- 利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源。

## 文件的hash值发生变化
- 1. main bundle 会随着自身的新增内容的修改，而发生变化。
- 2. vendor bundle 会随着自身的 module.id 的变化，而发生变化。
- 3. manifest runtime 会因为现在包含一个新模块的引用，而发生变化。

