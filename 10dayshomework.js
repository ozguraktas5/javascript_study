const aa = [4, 5, 8, 9]
const bb = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const emptySet = new Set()
console.log(emptySet)

for(let i = 0; i < 11; i++) {
  emptySet.add(i)
}

console.log(emptySet)

emptySet.delete(0)
console.log(emptySet)

emptySet.clear()
console.log(emptySet)

const stringSet = new Set()

stringSet.add('a')
stringSet.add('b')
stringSet.add('c')
stringSet.add('d')
stringSet.add('e')

console.log(stringSet)

const countries2 = [
    ["Turkey", "6"],
    ["Germany", "7"],
    ["Finland", "7"],
    ["Sweden", "6"],
    ["Norway", "6"],
    ["Iceland", "7"]
]

const countriesMap = new Map(countries2)

console.log(countriesMap)

let cc = [...aa, ...bb]
console.log(cc)

let AA = new Set(aa)
let BB = new Set(bb)

let CC = aa.filter((num) => BB.has(num))

console.log(CC)

let differentAA = aa.filter((num) => !BB.has(num))
let differentBB = bb.filter((num) => !AA.has(num))

console.log(differentAA)
console.log(differentBB)