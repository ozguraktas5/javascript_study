let firstName = 'Ozgur'
let lastName = 'Aktas'
let country = 'Turkey'
let city = 'Samsun'

const PI = Math.PI
const gravity = 9.81

const names = ['Raman', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 2, 3.23, 4, 5.11, 6, 7, 8.98, 9, 10]
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const languages = ['Turkish', 'Swedish', 'Danish', 'Norwegian', 'Icelandic']
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

const printFullName = (firstName, lastName) => firstName + ' ' + lastName
const square = (number) => number * number
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for(let i = 0; i < 6; i++){
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

console.log(hexaColor())

const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours

    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

console.log(showDateTime())

const names2 = ['Raman', 'Mathias', 'Elias', 'Brook']

let len = names2.length
for (let i = 0; i < len; i++) {
    console.log(names2[i].toUpperCase())
}

for (const name2 of names2) {
    console.log(name2.toUpperCase())
}

names2.forEach((name2) => console.log(name2.toUpperCase()))

const person = {
    firstName: 'Ozgur',
    lastName: 'Aktas',
    age: 32,
    country: 'Turkey',
    city: 'Samsun',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
    isMarried: true

}

for(const value in person){
    console.log(person[value])
}

