console.log("30 Days of Javascript");

console.log("%d %s of JavaScript", 30, "Days");

console.log("%c30 Days Of JavaScript", "color:green ");

console.log(
  "%c30 Days%c %cOf%c %cJavaScript",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
);

console.warn("This is a warning");

console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);

console.warn("Warning is different from error");

console.error("This is an error message");

console.error("We all make mistakes");

const names = ["Ozgur", "Ayse", "Veli", "Ali"];
console.table(names);

const user = {
  name: "Ozgur",
  title: "Developer",
  country: "Turkey",
  city: "Samsun",
  age: 32,
};

console.table(user);

const countries = [
  ["Turkey", "Istanbul"],
  ["Germany", "Berlin"],
  ["England", "London"],
];

console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

const countries2 = [
  ["Turkey", "Istanbul"],
  ["Germany", "Berlin"],
  ["England", "London"],
];

console.time("Regular for loop");
for (let i = 0; i < countries2.length; i++) {
  console.log(countries2[i][0], countries2[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

console.info('30 Days Of JavaScript challenge is trending on Github')

console.info('30 Days Of fullStack challenge might be released')

console.assert(4 > 3, '4 is greater than 3')
console.assert(3 > 4, '3 is not greater than 4')

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

const names3 = ["Ahmet", "Mehmet", "Zeynep", "Ali"]
const countries3 = [
  ["Turkey", "Istanbul"],
  ["Germany", "Berlin"],
  ["England", "London"],
]
const user3 = {
  name: "Ahmet",
  title: "Programmer",
  country: "Turkey",
  city: "Istanbul",
  age: 27
}
const users3 = [
  {
    name: "Ahmet",
    title: "Programmer",
    country: "Turkey",
    city: "Istanbul",
    age: 27
  },
  {
    name: "Mehmet",
    title: "Teacher",
    country: "Turkey",
    city: "Ankara",
    age: 28
  },
  {
    name: "Zeynep",
    title: "Instructor",
    country: "Turkey",
    city: "Izmir",
    age: 26
  },
  {
    name: "Ali",
    title: "Engineer",
    country: "Turkey",
    city: "Samsun",
    age: 22
  }
]

console.group('Names')
console.log(names3)
console.groupEnd()

console.group('Countries')
console.log(countries3)
console.groupEnd()

console.group('Users')
console.log(user3)
console.log(users3)
console.groupEnd()

