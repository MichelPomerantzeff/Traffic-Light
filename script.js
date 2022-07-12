const trafficLight = document.getElementById('trafficLight')


for (let i = 0; i < 3; i++) {
    let lightDiv = document.createElement('div')

    if (i === 0) {
        lightDiv.classList.add("light")
        lightDiv.classList.add("red-off")
        trafficLight.appendChild(lightDiv)
    }

    if (i === 1) {
        lightDiv.classList.add("light")
        lightDiv.classList.add("yellow-off")
        trafficLight.appendChild(lightDiv)
    }
    
    if (i === 2) {
        lightDiv.classList.add("light")
        lightDiv.classList.add("green-off")
        trafficLight.appendChild(lightDiv)
    }

}



// const buttons = document.getElementById('buttons')
// let intervalId = null

// function trafficLight(event) {
//     stopAuto()
//     turnOn[event.target.id]()
// }

// let colorValue = 0

// const nextIndex = () => colorValue < 2 ? colorValue++ : colorValue = 0

// const alternateColors = () => {
//     const colors = ['red', 'yellow', 'green']
//     const color = colors[colorValue]
//     turnOn[color]()
//     nextIndex()
// }

// const stopAuto = () => {
//     clearInterval(intervalId)
// }

// const turnOn = {
//     'red': () => img.src = './img/red.png',
//     'yellow': () => img.src = './img/yellow.png',
//     'green': () => img.src = './img/green.png',
//     'auto': () => intervalId = setInterval(alternateColors, 1000)
// }



// buttons.addEventListener('click', trafficLight)