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


const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages)

let minAge = Math.min(...ages)
console.log(minAge)

let maxAge = Math.max(...ages)
console.log(maxAge)

ages.sort()
const ortancaIndex1 = ages.length / 2 - 1
const ortancaIndex2 = ages.length / 2

const medyanSayi = (ages[ortancaIndex1] + ages[ortancaIndex2]) / 2
console.log(medyanSayi)

let toplam = 0;
for(let i=0; i<ages.length; i++) {
  toplam += ages[i]
}

//console.log(toplam)
console.log(toplam / ages.length)

ages.sort()
const minimumYas = ages[0]
const maksimumYas = ages[ages.length - 1]

const yasAraligi = maksimumYas - minimumYas
console.log(yasAraligi)

const ortalama = toplam / ages.length
console.log(Math.abs(minimumYas - ortalama))
console.log(Math.abs(maksimumYas - ortalama))

const countries1 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

const ilkOnUlke = countries1.slice(0,10)
console.log(ilkOnUlke)

//console.log(countries1.length)
const ortancaIndeks = Math.floor(countries1.length / 2) 
console.log(ortancaIndeks)

if (countries1.length % 2 === 1) {
  console.log(countries1[ortancaIndeks]);
} else {
  console.log(countries1.slice(ortancaIndeks - 1, ortancaIndeks + 1));
}




