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