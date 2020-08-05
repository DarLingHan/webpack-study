import _ from 'lodash'

function component () {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'hanling'], ' ')

    const button = document.createElement('button');
    const br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    
    ele.appendChild(br);
    ele.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "lodash" */ './print').then(module => {
        const print = module.default
        print()
    })

    return ele
}

document.body.appendChild(component())
