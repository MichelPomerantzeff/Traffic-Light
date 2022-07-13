const trafficLight = document.getElementById('trafficLight')

let redLight = document.createElement('div')
redLight.classList.add("red")

let yellowLight = document.createElement('div')
yellowLight.classList.add("yellow")

let greenLight = document.createElement('div')
greenLight.classList.add("green")

trafficLight.appendChild(redLight)
trafficLight.appendChild(yellowLight)
trafficLight.appendChild(greenLight)

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const auto = document.getElementById('auto')

const redOn = () => {
    redLight.classList.add('red-on')
    yellowLight.classList.remove('yellow-on')
    greenLight.classList.remove('green-on')
}

const yellowOn = () => {
    yellowLight.classList.add('yellow-on')
    greenLight.classList.remove('green-on')
    redLight.classList.remove('red-on')
}

const greenOn = () => {
    greenLight.classList.add('green-on')
    redLight.classList.remove('red-on')
    yellowLight.classList.remove('yellow-on')
}

let intervalId = null
let index = 0

function alternateColors () {
    if(index === 0) {
        redOn()
    } else if(index === 1) {
        yellowOn()
    } else {
        greenOn()
    }
    index < 2 ? index ++ : index = 0
}


red.onclick = () => {
    redOn()
    clearInterval(intervalId)
}

yellow.onclick = () => {
    yellowOn()
    clearInterval(intervalId)
}
green.onclick = () => {
    greenOn()
    clearInterval(intervalId)
}

auto.onclick = () => intervalId = setInterval(alternateColors, 1000)