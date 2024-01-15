for(let i = 0; i <= 5; i++) {
    console.log(i)
}

for(let i = 5; i >= 0; i--) {
    console.log(i)
}

for(let i = 0; i <= 5 ; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []

for(let i=0; i<countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr)

const numbers = [1, 2, 3, 4, 5]

let toplam = 0;
for(let i = 0; i<numbers.length; i++) {
    toplam += numbers[i]
}

console.log(toplam)

const newArr2 = []
for(let i=0; i<numbers.length; i++) {
    newArr2.push(numbers[i] ** 2)
}

console.log(newArr2)

let i = 0;
while(i <= 5) {
    console.log(i)
    i++
}

let j = 0;
do {
    console.log(j)
    j++
} while (j <= 5);

console.log("----------------------------------------")

for(const num of numbers) {
    console.log(num)
}

console.log("----------------------------------------")

let sum2 = 0
for(const sayi of numbers) {
    sum2 += sayi
}

console.log(sum2)

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const newArr4 = [];
for(const tech of webTechs) {
    newArr4.push(tech.toUpperCase())
}

console.log(newArr4)

for(const tech of webTechs) {
    console.log(tech[1])
}

for(let i=0; i<=5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

for(let k = 10; k < 30; k++) {
    if (k >= 22 && k <= 26) {
        continue
    }
    console.log(k)
}


