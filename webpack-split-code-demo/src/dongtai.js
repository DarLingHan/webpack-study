// 动态导入lodash——动态代码拆分

// function getComponent () {
//     return import(/* wbpackChunkName: "lodash" */ 'lodash').then(({ default: _}) => {
//         const ele = document.createElement('div')
//         ele.innerHTML =  _.join(['原始', '动态代码拆分'], ' ')
//         return ele
//     }).catch(err => `error:${err}`)
// }

async function getComponent () {
    const ele = document.createElement('div')
    const {default: _} = await import(/* wbpackChunkName: "lodash" */ 'lodash')
    ele.innerHTML = _.join(['promise', '动态代码拆分'], ' ')
    return ele
}

getComponent().then(component => {
    document.body.appendChild(component)
})
