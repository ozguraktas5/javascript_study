const allTitles = document.getElementsByTagName('h1')

console.log(allTitles)
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}

const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2)
console.log(allTitles2.length)

for (let i = 0; i < allTitles2.length; i++) {
    console.log(allTitles2[i])
}

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

let firstTitle2 = document.querySelector('h1')
let firstTitle3 = document.querySelector('#first-title')
let firstTitle4 = document.querySelector('.title')

const allTitles3 = document.querySelectorAll('h1')

console.log(allTitles3.length)
for (let i = 0; i < allTitles3.length; i++) {
    console.log(allTitles3[i])
}

allTitles3.forEach(title => console.log(title))

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'