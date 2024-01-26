const companies = new Set()
console.log(companies)

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setLanguages = new Set(languages)
console.log(setLanguages)

for(const language of setLanguages) {
  console.log(language)
}

const companies2 = new Set()

companies2.add('Facebook')
companies2.add('Google')
companies2.add('Microsoft')
companies2.add('Apple')
companies2.add('IBM')
companies2.add('Oracle')
companies2.add('Amazon')

console.log(companies2.size)
console.log(companies2)

const companies3 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']

const companiesSet = new Set()

for (const companies of companies3) {
  companiesSet.add(companies)
}

console.log(companiesSet)

console.log(companiesSet.delete('Amazon'))
console.log(companiesSet)

console.log(companiesSet.has('Oracle'))
console.log(companiesSet.has('Monster'))

companiesSet.clear()
console.log(companiesSet)

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for(const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({ lang: l, count: filteredLang.length })
}

console.log(counts)

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setNumbers = new Set(numbers)

console.log(setNumbers)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

console.log(c)

let A = new Set(a)
let B = new Set(b)

let C = a.filter((num) => B.has(num))

console.log(C)

let differentA = a.filter((num) => !B.has(num))
let differentB = b.filter((num) => !A.has(num))

console.log(differentA)
console.log(differentB)

const map = new Map()
console.log(map)

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

const countriesMap = new Map(countries)
console.log(countriesMap)
console.log(countriesMap.size)

const countriesMap2 = new Map()
console.log(countriesMap2)
countriesMap2.set('Turkey', 'Ankara')
countriesMap2.set('Germany', 'Berlin')
countriesMap2.set('Paris', 'France')
console.log(countriesMap2)

console.log(countriesMap2.get('Germany'))
console.log(countriesMap2.has('Turkey'))

for(const country of countriesMap2) {
  console.log(country)
}

for(const [country, city] of countriesMap2) {
  console.log(country, city)
}



