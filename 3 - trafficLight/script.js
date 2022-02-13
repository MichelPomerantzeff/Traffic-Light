const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let intervalId = null

function trafficLight(event) {
    stopAuto()
    turnOn[event.target.id]()
}

let colorValue = 0

const nextIndex = () => colorValue < 2 ? colorValue++ : colorValue = 0

const alternateColors = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorValue]
    turnOn[color]()
    nextIndex()
}

const stopAuto = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = './img/red.png',
    'yellow': () => img.src = './img/yellow.png',
    'green': () => img.src = './img/green.png',
    'auto': () => intervalId = setInterval(alternateColors, 1000)
}



buttons.addEventListener('click', trafficLight)