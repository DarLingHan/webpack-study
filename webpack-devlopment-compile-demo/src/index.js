import _ from 'lodash'
import printMe from './print'

function component () {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'hanling'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = '点击这里，查看console'
    btn.onclick = printMe;
    ele.appendChild(btn)

    return ele
}

document.body.appendChild(component())
