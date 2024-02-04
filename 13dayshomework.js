import countries from "./countries.js";
import countries_data from "./countries_data.js";

console.table(countries)
console.table(countries_data)

console.assert(10 > 2 * 10, "10 is not greater than 20")

console.warn("Bu bir hatadir.")

console.error("Hata mesaji")

console.time("Regular while loop")
let i = 0
while (i < countries.length) {
    console.log(countries[i])
    i++
}
console.timeEnd("Regular while loop")

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const country of countries) {
  console.log(country);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach((country) => {
  console.log(country);
})
console.timeEnd("forEach loop");
