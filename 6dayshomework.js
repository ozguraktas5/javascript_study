const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

let m = 10;
do {
  console.log(m);
  m--;
} while (m >= 0);

// for(let i = 0; i < n; i++) {
//     console.log(i);
// }

console.log("#");
console.log("##");
console.log("###");
console.log("####");
console.log("#####");
console.log("######");
console.log("#######");

for (let n = 0; n < 11; n++) {
  console.log(`${n} x ${n} = ${n * n}`);
}

console.log("i \t i^2 \t i^3");
for (let i = 0; i < 11; i++) {
  console.log(`${i}  \t  ${i ** 2}  \t  ${i ** 3}`);
}

for (let a = 0; a < 100; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

for (let a = 0; a < 100; a++) {
  if (a % 2 !== 0) {
    console.log(a);
  }
}

for (let a = 2; a < 100; a++) {
    let asalMi = true
    for(let b = 2; b < a; b++) {
        if (a % b === 0) {
            asalMi = false
            break
        }
    }
    if (asalMi) {
        console.log(a)
    }
}

let topla = 0;
for(let c = 0; c < 101; c++) {
    topla += c
}

console.log(`0 ile 100 arasındaki sayıların toplamı: ${topla}.`)

let tekTopla = 0;
let ciftTopla = 0;

for(let e = 0; e < 101; e++) {
    if (e % 2 === 0) {
        ciftTopla += e
    } else {
        tekTopla += e
    }
}

console.log(`Çift sayıların toplamı ${ciftTopla}\nTek sayıların toplamı ${tekTopla} `)

function randomId (length = 8) {
  const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ""

  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }
  return result
} 

const result = randomId()
console.log(result)

function randomHexa (length = 6) {
  const characters ='0123456789abcdef'
  let result2 = "#"
  
  for(let i = 0; i < length; i++) {
    const randomHexaIndex = Math.floor(Math.random() * characters.length)
    result2 += characters[randomHexaIndex]
  }
  return result2
} 

const result2 = randomHexa()
console.log(result2)

function randomRgb () {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

const result3 = randomRgb()
console.log(result3)

countries4 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let countriesArray = []

for(let i = 0; i < countries4.length; i++) {
  const randomIndex = Math.floor(Math.random() * countries4.length)
  countriesArray.push(countries4[randomIndex])
}

console.log(countriesArray)

let arrayLength = []

for (let i = 0; i < countries4.length; i++) {
  arrayLength.push(countries4[i].length)
}

console.log(arrayLength)

const yeniDizi = countries4.map(country => {
  const formatCountry = country.charAt(0) + country.slice(1).toLowerCase()
  const countryCode = country.substring(0,3)
  const countryLength = country.length

  return [formatCountry, countryCode, countryLength]
});

console.log(yeniDizi)

const countriesLand = countries4.filter(country => country.toLowerCase().includes("land"))
console.log(countriesLand)

const countriesIa = countries4.filter(country => country.toLowerCase().includes("ia"))
console.log(countriesIa)

const maxLength = countries4.reduce((currentCountry, maxCountry) => {
  return currentCountry.length > maxCountry.length ? currentCountry : maxCountry
})

console.log(maxLength)

const countriesFiveCharacter = countries4.reduce((accumulator, currentCountry) => {
  if (currentCountry.length === 5) {
    accumulator.push(currentCountry)
  }
  return accumulator
}, [])

console.log(countriesFiveCharacter)

const sortedCountries = [...countries]

console.log(countries)
console.log(sortedCountries.sort())

console.log(webTechs.sort())
console.log(mernStack.sort())






