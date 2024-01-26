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

