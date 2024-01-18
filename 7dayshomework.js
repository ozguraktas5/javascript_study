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