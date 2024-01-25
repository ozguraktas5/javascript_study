const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countries2 = [
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
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const callback = (x) => {
  return x ** 3;
};

console.log(callback(3));

countries.forEach((item) => console.log(item));

names.forEach((name) => console.log(name));

numbers.forEach((number) => console.log(number));

const countryUpper = countries.map((country) => country.toUpperCase());
console.log(countryUpper);

const countryLengthSeven = countries.map((country) => country.length);
console.log(countryLengthSeven);

const numbersSquare = numbers.map((item) => {
  return item ** 2;
});
console.log(numbersSquare);

const namesUpperCase = names.map((name) => name.toUpperCase());
console.log(namesUpperCase);

const productPrice = products.map((product) => product.price);
console.log(productPrice);

const countryLand = countries.filter((country) => country.includes("land"));
console.log(countryLand);

const countrySix = countries.filter((item) => item.length === 6);
console.log(countrySix);

const country = countries.filter((item) => item.length >= 6);
console.log(country);

const countryStartE = countries.filter((item) => item.startsWith("E"));
console.log(countryStartE);

const productValues = products.filter(
  (item) => item.price !== " " && item.price !== ""
);
console.log(productValues);

function getStringLists(array) {
  const stringArray = array.filter((item) => typeof item === "string");
  return stringArray;
}

const array1 = ["kivi", 235, 12, "elma", true, { bir: 1, iki: 2, uc: 3 }];
console.log(getStringLists(array1));

const sum = numbers.reduce((acc, item) => acc + item, 0);
console.log(sum);

const countryBilesim = countries.reduce(
  (acc, country) => acc + " " + country,
  "Estonia"
);
console.log(countryBilesim);

const namesSeven = names.some((item) => item.length > 7);
console.log(namesSeven);

const allCountryLand = countries.every((country) => country.includes("land"));
console.log(allCountryLand);

const countryFindSix = countries.find((item) => item.length === 6);
console.log(countryFindSix);

const countryFindSixIndex = countries.findIndex(
  (country) => country.length === 6
);
console.log(countryFindSixIndex);

const countryNorway = countries.findIndex((country) => country === "Norway");
console.log(countryNorway);

const countryRussia = countries.findIndex((country) => country === "Russia");
console.log(countryRussia);

const sumPrice = products
  .map((item) => item.price)
  .filter((item) => typeof item === "number")
  .reduce((acc, cur) => acc + cur, 0);
console.log(sumPrice);

const sumPrice2 = products.reduce((acc, cur) => {
  const price = parseInt(cur.price);
  if (!isNaN(price)) {
    return acc + price;
  }
  return acc;
}, 0);

console.log(sumPrice2);

const countriesLand = countries2.map((item) => item.includes("land"));
console.log(countriesLand);

function getObject(countryList) {
  const result = [];

  for (let i = 0; i < countryList.length; i++) {
    const countryName = countryList[i];
    const firstLetter = countryName.charAt(0).toLowerCase();
    const letterCount = countryName.length;

    const object = {
      "Country Name": countryName,
      "First Letter": firstLetter,
      "Letter Count": letterCount,
    };

    result.push(object);
  }
  return result;
}

console.log(getObject(countries2));

function getFirstTenCountries(countryList) {
  const emptyArray = [];

  for (let i = 0; i < countryList.length; i++) {
    if (i < 10) {
      emptyArray.push(countryList[i]);
    }
  }
  return emptyArray;
}

console.log(getFirstTenCountries(countries2));

function getLastTenCountries(countryList) {
  const emptyArray = [];

  for (let i = countryList.length - 1; i >= 0; i--) {
    if (i > 0) {
      emptyArray.push(countryList[i]);
    }
  }
  return emptyArray;
}

console.log(getLastTenCountries(countries2));

import countries_data from "./countries_data.js";

const regionSort = countries_data.map((item) => item.region);
console.log(regionSort.sort());

const capitalSort = countries_data.map((item) => item.capital);
console.log(capitalSort.sort());

const populationSort = countries_data.map((item) => item.population);
console.log(populationSort.sort((a, b) => a - b));

const countries3 = [
  { country: "English", count: 91 },
  { country: "French", count: 45 },
  { country: "Arabic", count: 25 },
  { country: "Spanish", count: 24 },
  { country: "Russian", count: 9 },
  { country: "Portuguese", count: 9 },
  { country: "Dutch", count: 8 },
  { country: "German", count: 7 },
  { country: "Chinese", count: 5 },
  { country: "Swahili", count: 4 },
];

function mostSpokenLanguages(countries, count) {
    const countriesSort = countries.sort((x, y) => y.count - x.count)
    const countriesCount = countriesSort.slice(0, count)
    return countriesCount

}

console.log(mostSpokenLanguages(countries3, 3))

function mostPopulatedCountries(countries_data, count) {
    const countriesDataSort = countries_data.sort((a, b) => b.population - a.population)
    const countriesDataCount = countriesDataSort.slice(0, count)
    return countriesDataCount
}

console.log(mostPopulatedCountries(countries_data, 3))
