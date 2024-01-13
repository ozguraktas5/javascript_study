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

const emptyArray = [];
console.log(emptyArray);

const dizi = new Array(7).fill("X");
console.log(dizi);
console.log(dizi.length);
console.log(dizi[0]);
console.log(dizi[(dizi.length - 1) / 2]);
console.log(dizi[dizi.length - 1]);

let mixedDataTypes = [55, "Ozgur", true, 43.2, { one: 1 }, "Alev"];
console.log(mixedDataTypes.length);

let ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(ItCompanies)
console.log(ItCompanies.length)
console.log(ItCompanies[0])
console.log(ItCompanies[(ItCompanies.length - 1) / 2])
console.log(ItCompanies[ItCompanies.length - 1])

for(let i=0; i < ItCompanies.length; i++) {
    console.log(ItCompanies[i])
}

for(let i=0; i < ItCompanies.length; i++) {
    uppercase = ItCompanies[i].toUpperCase()
    console.log(uppercase)
}

console.log(ItCompanies.toString() + " are big IT companies.")

//let word = prompt("Sirket adi giriniz:")

// ItCompanies.includes(word)
//     ? console.log(word)
//     : console.log("Not found")

let oHarfiOlanSirketler = []

for(let i=0; i<ItCompanies.length; i++){
    if (ItCompanies[i].includes('oo')) {
        oHarfiOlanSirketler.push(ItCompanies[i])
    }
}

console.log(oHarfiOlanSirketler)

const siraliHali = ItCompanies.sort()
console.log(siraliHali)

const tersHali = ItCompanies.reverse()
console.log(tersHali)

const ilkUc = ItCompanies.slice(0,3)
console.log(ilkUc)

const sonUc = ItCompanies.slice(-3)
console.log(sonUc)

const orta = ItCompanies.slice((ItCompanies.length - 1) / 2, ((ItCompanies.length - 1) / 2) + 1)
console.log(orta)

ItCompanies.shift()
console.log(ItCompanies)

ItCompanies.pop()
console.log(ItCompanies)

ItCompanies.pop()
ItCompanies.pop()
ItCompanies.pop()
ItCompanies.pop()
ItCompanies.pop()
console.log(ItCompanies)


