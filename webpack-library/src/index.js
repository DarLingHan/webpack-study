// import _ from 'lodash';
// import Data from './data.json';
// console.log(Data)

export function lingsDream () {
    console.log('包里的文件')
    document.body.appendChild(document.createTextNode('创建一个library并发布'))
    return '123'
    // let ele = document.createElement('div')
    // let returnHtml = Object.entries(Data).reduce((pre, cur) => {
    //     // key: cur[0]
    //     // val: cur[1]
    //     return `
    //         ${pre}
    //         <span>${cur[0]}——${cur[1]}</span></br>
    //     `
    // }, '')
    // ele.appendChild(returnHtml)
    // document.body.appendChild(ele)
}

// lingsDream()

// console.log(_.join(['她的信息', ...Data], ' '))