const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const callback = (x) => {
    return x ** 3
}

console.log(callback(3))

countries.forEach((item) => console.log(item))

names.forEach((name) => console.log(name))

numbers.forEach((number) => console.log(number))

const countryUpper = countries.map((country) => country.toUpperCase())
console.log(countryUpper)

const countryLengthSeven = countries.map((country) => country.length)
console.log(countryLengthSeven)

const numbersSquare = numbers.map((item) => {
    return item ** 2
})
console.log(numbersSquare)

const namesUpperCase = names.map(name => name.toUpperCase())
console.log(namesUpperCase)

const productPrice = products.map(product => product.price)
console.log(productPrice)

const countryLand = countries.filter((country) => country.includes("land"))
console.log(countryLand)

const countrySix = countries.filter((item) => item.length === 6)
console.log(countrySix)