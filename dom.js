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