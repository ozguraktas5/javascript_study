const anonymousFunction = function() {
    console.log(
        'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
    )
}

anonymousFunction()

const square = function() {
    console.log("Bu bir expression function türünde fonksiyondur")
}

square()

const square2 = function() {
    let num = 2
    let square2 = num * num
    console.log(square2)
}
square2()

const printFullName = function() {
    const firstName = "Ozgur"
    const lastName = "Aktas"
    const space = " "
    console.log(firstName + space + lastName)
}
printFullName()

function addTwoNumbers() {
    const numberOne = 6,
        numberTwo = 7
    const total = numberOne + numberTwo
    return total
}

console.log(addTwoNumbers())

function areaOfCircle(r) {
    return Math.PI * r * r
}

console.log(Math.round(areaOfCircle(5)))

function square3(x) {
    return x * x
}

console.log(square3(5))

function twoNumbers(no1,no2) {
    const sum = no1 + no2
    console.log(sum)
}

twoNumbers(23,54)

const twoNumbers2 = function(number1, number2) {
    const sum = number1 + number2
    return sum
}

console.log(twoNumbers2(1,2))

function sumArrayValues(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumArrayValues([1,2,3,4]))
console.log(sumArrayValues([1,2,3,4,45,23,52]))

function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1,2,3,4)

function sumAllNums2() {
    let sum = 0
    for(let i=0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums2(1,2,3,4,5,6))
console.log(sumAllNums2(1,2,3,4,5,6,7))
console.log(sumAllNums2(1,2,3,4,5,6,7,8))

let squaredNum = (function(n) {
    return n * n
})(4)

console.log(squaredNum)

function square6(n) {
    return n * n
}

console.log(square6(7))

const square7 = m => {
    return m * m
}

console.log(square7(8))

const square8 = a => a * a

console.log(square8(9))

const changeToUpperCase = arr => {
    let newArr = []
    for(const item of arr) {
        newArr.push(item.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

console.log(changeToUpperCase(countries))

const printFullName2 = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printFullName2('Ebru', 'Taneli'))

const printFullName3 = (firstName2, lastName2) => `${firstName2} ${lastName2}`
console.log(printFullName3('Ali', 'Veli'))

const sumAllNums4 = (...args) => {
    let sum = 0
    for (const item of args) {
        sum += item
    }
    return sum
}

console.log(sumAllNums4(1,2,3))
console.log(sumAllNums4(1,2,3,4))

function generateFullName(firstName = "Ozgur", lastName = "Aktas") {
    const fullName = firstName + " " + lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName("John", "Elder"))

function calculateAge(birthYear, currentYear = 2024) {
    const age = currentYear - birthYear
    return age
}

console.log(calculateAge(1992))

const calculateAge2 = (birthYear, currentYear = 2024) => {
    const age = currentYear - birthYear
    return age
}

console.log(calculateAge2(1992))




