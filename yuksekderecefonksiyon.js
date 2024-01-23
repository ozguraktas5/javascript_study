const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 5))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 4 * m + t
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrder(5)(6)(7))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element

    }
    arr.forEach(callback)
    return sum
}

console.log(sumArray(numbers))

function sayHello() {
    console.log("Hello!")
}

//setInterval(sayHello, 1000)

function sayHello2() {
    console.log("Hello2!")
}

//setTimeout(sayHello2, 3000)

// arr.forEach(function (element, index, arr) {
//     console.log(element, index, arr)
// })

// arr.forEach((element, index, arr) => {
//     console.log(element, index, arr)
// })

// arr.forEach((element, index, arr) => console.log(element, index, arr))

let sum = 0
const numbers2 = [1,2,3,4,5]
numbers2.forEach(number => console.log(number))

numbers2.forEach(number => sum += number)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(country => console.log(country.toUpperCase()))
