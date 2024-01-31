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

console.warn('This is a warning')

console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)

console.warn('Warning is different from error')

console.error('This is an error message')

console.error('We all make mistakes')

const names = ['Ozgur', 'Ayse', 'Veli', 'Ali']
console.table(names)

const user = {
    name: 'Ozgur',
    title: 'Developer',
    country: 'Turkey',
    city: 'Samsun',
    age: 32
}

console.table(user)

const countries = [
    ['Turkey',  'Istanbul'],
    ['Germany', 'Berlin'],
    ['England', 'London']
]

console.table(countries)
