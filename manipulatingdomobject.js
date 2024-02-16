let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM'

console.log(title)

let title2

for (let i = 0; i < 3; i++) {
    title2 = document.createElement('h1')
    title2.className = 'title'
    title2.style.fontSize = '24px'
    title2.textContent = i
    console.log(title2)
}

let title3

for (let i = 0; i < 3; i++) {
    title3 = document.createElement('h1')
    title3.className = 'title'
    title3.style.fontSize = '24px'
    title3.textContent = i
    document.body.appendChild(title3)
}

const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
}

const ul2 = document.querySelector('ul')
ul2.innerHTML = ''
