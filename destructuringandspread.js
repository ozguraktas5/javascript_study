const numbers = [1, 2, 3]
const [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const names = ["Ozgur", "Ebru", "Alev", "Murat"]
const [nameOne, nameTwo, nameThree, nameFour] = names

console.log(nameOne, nameTwo, nameThree, nameFour)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backend] = fullStack

console.log(frontEnd, backend)

const numbers2 = [4, 5, 6]
const [numberOne, ,numberThree] = numbers2

console.log(numberOne, numberThree)

const [, secondPerson, , fourthPerson] = names
console.log(secondPerson, fourthPerson)

const names2 = [undefined, "Ozgur", "Ebru"]
let [namesOne = "Ali", namesTwo, namesThree, namesFour = "Veli"] = names2

console.log(namesOne, namesTwo, namesThree, namesFour)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [birNumara, ikiNumara, ucNumara, ...kalani] = nums

console.log(birNumara, ikiNumara, ucNumara, kalani)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country,city] of countries) {
  console.log(country, city)
}

const fullStack2 = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (const [itemOne, itemTwo, itemThree] of fullStack2) {
    console.log(itemOne, itemTwo, itemThree)
}

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)

const rectangle2 = {
  width2: 20,
  height2: 10,
  area2: 200
}

let {width2, height2, area2, perimeter2 = 60} = rectangle2
console.log(width2, height2, area2, perimeter2)

const rectangle3 = {
  width3: 30,
  height3: 10,
  area3: 200,
  perimeter3: 80
}

let {width3, height3, area3, perimeter3 = 50} = rectangle3
console.log(width3, height3, area3, perimeter3)

