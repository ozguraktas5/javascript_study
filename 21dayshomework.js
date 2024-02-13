// let firstP = document.querySelector("p");
// console.log(firstP)

// let firstPe = document.querySelector('#first-p')
// console.log(firstPe)

// let secondPe = document.querySelector('#second-p')
// console.log(secondPe)

// let thirdPe = document.querySelector('#third-p')
// console.log(thirdPe)

// let fourthPe = document.querySelector('#fourth-p')
// console.log(fourthPe)

// let allPe = document.querySelectorAll('p')

// allPe.forEach(function(p) {
//     let textContent = p.textContent;
//     console.log(textContent)
// })

// allPe[3].textContent = 'Fourth Paragraph'

// allPe[0].className = 'p'
// allPe[0].id = 'first-p'

// allPe[1].setAttribute('class', 'p')
// allPe[1].setAttribute('id', 'second-p')

// allPe[2].className = 'p'
// allPe[2].id = 'third-p'

// allPe[3].setAttribute('class', 'p')
// allPe[3].setAttribute('id', 'fourth-p')

// allPe[0].style.backgroundColor = 'brown'
// allPe[1].style.backgroundColor = 'gray'
// allPe[2].style.backgroundColor = 'blue'
// allPe[3].style.backgroundColor = 'yellow'

// allPe[0].style.color = 'black'
// allPe[1].style.color = 'white'
// allPe[2].style.color = 'black'
// allPe[3].style.color = 'white'

// allPe[0].style.fontSize = '24px'
// allPe[1].style.fontSize = '24px'
// allPe[2].style.fontSize = '24px'
// allPe[3].style.fontSize = '24px'

// allPe[0].style.border = '5px solid black'
// allPe[1].style.border = '5px solid black'
// allPe[2].style.border = '5px solid black'
// allPe[3].style.border = '5px solid black'

// allPe[0].style.textAlign = 'center'
// allPe[1].style.textAlign = 'center'
// allPe[2].style.textAlign = 'center'
// allPe[3].style.textAlign = 'center'

// allPe[0].style.fontWeight = '3px'
// allPe[1].style.fontWeight = '3px'
// allPe[2].style.fontWeight = '3px'
// allPe[3].style.fontWeight = '3px'

// allPe.forEach((title, i) => {
//     if (i % 2 === 0) {
//         title.style.color = 'red'
//     } else {
//         title.style.color = 'green'
//     }
// })

// allPe[0].textContent = 'First Paragraph'
// allPe[1].textContent = 'Second Paragraph'
// allPe[2].textContent = 'Third Paragraph'
// allPe[3].textContent = 'Fourth Paragraph'

function changeYearColor() {
    let yearElement = document.getElementById('year')
    let colors = ['blue', 'red', 'green', 'yellow', 'gray', 'brown', 'purple', 'orange']
    let currentColor = yearElement.style.color
    let randomColor

    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)]
    } while (randomColor === currentColor)

    yearElement.style.color = randomColor
}

setInterval(changeYearColor, 1000)

function updateDateTime() {
    let now = new Date()
    let date = now.toDateString()
    let time = now.toLocaleTimeString()

    document.getElementById('datetime').innerHTML = date + ' ' + time

}

function changeBackgroundColor() {
    let container = document.getElementById('datetime-container')
    let colors = ['blue', 'red', 'green', 'yellow', 'gray', 'brown', 'purple', 'orange']
    let currentColor = container.style.backgroundColor
    let randomColor

    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)]
    } while (randomColor === currentColor)

    container.style.backgroundColor = randomColor
}

updateDateTime()

setInterval(updateDateTime, 1000)
setInterval(changeBackgroundColor, 1000)

let doneItem = document.querySelectorAll('.done')
let ongoingItem = document.querySelectorAll('.ongoing')
let comingItem = document.querySelectorAll('.coming')

doneItem.forEach(function(task) {
    task.style.backgroundColor = 'green'
})

ongoingItem.forEach(function(task) {
    task.style.backgroundColor = 'yellow'
})

comingItem.forEach(function(task) {
    task.style.backgroundColor = 'red'
})

