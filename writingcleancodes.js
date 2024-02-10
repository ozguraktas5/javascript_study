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


