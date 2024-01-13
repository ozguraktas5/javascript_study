import countriesArray from './countries.js';
import webTechsArray from './web_techs.js';

//console.log(countriesArray)
//console.log(webTechsArray)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.replace(".","").replace(".","").replace(",","").replace(",","").replace(",","").replace(",","").split(" "))
console.log(text.replace(".","").replace(".","").replace(",","").replace(",","").replace(",","").replace(",","").split(" ").length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)

const indexHoney = shoppingCart.indexOf("Honey")

if(indexHoney !== -1) {
    shoppingCart.splice(indexHoney, 1)
}

console.log(shoppingCart)

const indexTea = shoppingCart.indexOf("Tea")

if(indexTea !== -1) {
    shoppingCart[indexTea] = "Green Tea";
}

console.log(shoppingCart)

const indexEthiopia = countriesArray.indexOf("Ethiopia")

if(indexEthiopia !== -1) {
    countriesArray[indexEthiopia] = countriesArray[indexEthiopia].toUpperCase()
} else {
    countriesArray.push("Ethiopia")
}

console.log(countriesArray)

const indexSass = webTechsArray.indexOf("Sass")

if(indexSass !== -1) {
    webTechsArray[indexSass] = 'Sass is a CSS preprocess'
} else {
    webTechsArray.push("Sass")
}

console.log(webTechsArray)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)







