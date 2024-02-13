let firstP = document.querySelector("p");
console.log(firstP)

let firstPe = document.querySelector('#first-p')
console.log(firstPe)

let secondPe = document.querySelector('#second-p')
console.log(secondPe)

let thirdPe = document.querySelector('#third-p')
console.log(thirdPe)

let fourthPe = document.querySelector('#fourth-p')
console.log(fourthPe)

let allPe = document.querySelectorAll('p')

allPe.forEach(function(p) {
    let textContent = p.textContent;
    console.log(textContent)
})

allPe[3].textContent = 'Fourth Paragraph'

allPe[0].className = 'p'
allPe[0].id = 'first-p'

allPe[1].setAttribute('class', 'p')
allPe[1].setAttribute('id', 'second-p')

allPe[2].className = 'p'
allPe[2].id = 'third-p'

allPe[3].setAttribute('class', 'p')
allPe[3].setAttribute('id', 'fourth-p')
