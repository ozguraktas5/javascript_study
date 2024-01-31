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
