function fullName() {
    console.log("Ozgur Aktas")
}

fullName()

function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName2("Ebru","Taneli"))

function addNumbers(number1,number2) {
    return number1 + number2
}

console.log(addNumbers(1,2))

function areaOfRectangle(width,length) {
    area = width * length
    return area
}

console.log(areaOfRectangle(2,3))

function perimeterOfRectangle(width,length) {
    perimeter = 2 * (width + length)
    return perimeter
}

console.log(perimeterOfRectangle(4,5))

function volumeOfRectPrism(length,width,height) {
    volume = length * width * height
    return volume
}

console.log(volumeOfRectPrism(4,5,6))

function areaOfCircle(r) {
    area = Math.round(Math.PI * r * r)
    return area
}

console.log(areaOfCircle(5))

function circumOfCircle(r) {
    circumference = Math.round(2 * Math.PI * r)
    return circumference
}

console.log(circumOfCircle(5))

function density(mass, volume) {
    density = mass / volume
    return density
}

console.log(density(120,3))

function hiz(toplamMesafe, toplamSure) {
    hiz = toplamMesafe / toplamSure
    return hiz
}

console.log(hiz(100,10))

function weight(mass, gravity) {
    weight = mass * gravity
    return weight
}

console.log(weight(80,9.81))

function bodyMassIndex(weight, height) {
    let bmi = weight / (height * height)
    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi <= 24.9) {
        return "Normal weight"
    } else if (bmi <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

console.log(bodyMassIndex(82,1.71))

function checkSeason(month) {
    if (month == "December" || month == "January" || month == "February") {
        return "Winter"
    } else if (month == "March" || month == "April" || month == "May") {
        return "Spring"
    } else if (month == "June" || month == "July" || month == "August") {
        return "Summer"
    } else if (month == "September" || month == "October" || month == "November") {
        return "Autumn"
    }
}

console.log(checkSeason("June"))

function findMax(no1, no2, no3) {
    if (no1 > no2 && no1 > no3) {
        return no1
    } else if (no2 > no1 && no2 > no3) {
        return no2
    } else if (no3 > no1 && no3 > no2) {
        return no3
    }
}

console.log(findMax(124,346,457))

function solveLinEquation(a, b, c, x, y) {
    result = a * x + b * y + c  
    return result
}

console.log(solveLinEquation(1,2,3,4,5))

function solveQuadEquation(a, b, c) {
    const diskriminant = b ** 2 - 4 * a * c;

    if (diskriminant > 0) {
        const kok1 = (-b - Math.sqrt(diskriminant)) / ( 2 * a);
        const kok2 = (-b + Math.sqrt(diskriminant)) / ( 2 * a);
        return [kok1, kok2]
    } else if (diskriminant === 0) {
        const kok = -b / (2 * a)
        return [kok]
    } else {
        const gercekKisim = -b / (2 * a);
        const hayaliKisim = Math.sqrt(Math.abs(diskriminant)) / (2 * a);
        const kok1 = `${gercekKisim} - ${hayaliKisim}i`
        const kok2 = `${gercekKisim} + ${hayaliKisim}i`
        return [kok1, kok2]
    }
}

console.log(solveQuadEquation(1,-1,-2))

function printArray([...args]) {
    for(let i= 0; i < args.length; i++) {
        console.log(args[i])
    }
}

printArray([1,2,3,4,5])

function showDateTime() {
    let date = new Date();
    let day = date.getDay()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let seconds = date.getSeconds()
    return `${month}/${day}/${year} ${hour}:${seconds}`
}

console.log(showDateTime())

function swapValues(a, b) {
    a, b = b, a
    return [b,a]
}

console.log(swapValues(10,20))

let emptyArray = []
function reverseArray([...args]) {
    for(let i = args.length-1; i >= 0; i--) {
        emptyArray.push(args[i])
    }
    return emptyArray
}

console.log(reverseArray([1,2,3,4,5]))

function capitalizeArray(inputArray) {
    if(!Array(inputArray)) {
        console.error('Input is not an array')
    }

    const capitalizeArray = inputArray.map(item => {
        if (typeof item !== 'string') {
            console.error("Non-string element found in the array.")
            return item
        }

        return item.charAt(0).toUpperCase() + item.slice(1)
    })

    return capitalizeArray
}

console.log(capitalizeArray(['apple','banana','orange']))

let bosArray = []

function addItem(item) {
    bosArray.push(item)
    return bosArray
}

console.log(addItem('apple'))
console.log(addItem('orange'))

let doluArray = ["apple","banana","orange"]

function removeItem(indexRemove) {
    doluArray.splice(indexRemove,1);
    return doluArray
}

console.log(removeItem(0))

let sum = 0
function sumOfNumbers(number1,number2) {
    for(let i = number1; i <= number2; i++) {
        sum += i
    }
    return sum
}

console.log(sumOfNumbers(1,5))

let sumOdd = 0
function sumOfOdds(number1,number2) {
    for(let i = number1; i <= number2; i++) {
        if(i % 2 !== 0) {
            sumOdd += i
        }
    }
    return sumOdd
}

console.log(sumOfOdds(1,5))

let sumEven = 0
function sumOfEven(number1,number2) {
    for(let i = number1; i <= number2; i++) {
        if(i % 2 === 0) {
            sumEven += i
        }
    }
    return sumEven
}

console.log(sumOfEven(1,5))