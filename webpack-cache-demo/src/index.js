import _ from 'lodash'
// import Print from './print'

function component () {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'hanling'], ' ')
    // ele.onclick = Print.bind(null, 'hello webpack')

    return ele
}

document.body.appendChild(component())
