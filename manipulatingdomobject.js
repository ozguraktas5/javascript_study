// let title = document.createElement('h1')
// title.className = 'title'
// title.style.fontStyle = '24px'
// title.textContent = 'Creating HTML element DOM'

// console.log(title)

let title

for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontStyle = '24px'
    title.textContent = i
    console.log(title)
}