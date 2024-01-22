const person = {
    firstName: 'Ozgur',
    lastName: 'Aktas',
    age: 31,
    country: 'Turkey',
    city: 'Samsun',
    skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Python'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+12423434634'
}

console.log(person.firstName)
console.log(person.lastName)

console.log(person['age'])
console.log(person["phone number"])

console.log(person.getFullName())

person.nationality = 'German'
person.country = 'Germany'
person.title = 'Developer'
person.skills.push('Meteor')
person.skills.push('Sass')
person.isMarried = false

person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`
    return statement
}
console.log(person)
console.log(person.getPersonInfo())

const person2 = {
    firstName: 'Hale',
    age: 26,
    country: 'Italy',
    city: 'Rome',
    skills: ['Svelte','Go'],
    title: 'lawyer',
    address: {
        street: 'Trastevere',
        pobox: 2017,
        city: 'Rome'
    },
    getPersonInfo: function() {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}

const copyPerson = Object.assign({}, person2)
console.log(copyPerson)

person2.country = "France"
console.log(person2)

const keys = Object.keys(copyPerson)
console.log(keys)

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))

const dog = {};
console.log(dog)

dog.name = "Lucy"
dog.legs = "Short"
dog.color = "Brown"
dog.age = 4

console.log(dog)

dog.bark = function() {
    console.log("Woof Woof!")
}

console.log(dog)

dog.breed = "Terrier"
dog.getDogInfo = function() {
    return `My dog name is ${this.name}. It is ${this.age} years old.`
}

console.log(dog.getDogInfo())

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const userName in users) {
    const user = users[userName];

    if (user.skills.length > maxSkillsCount) {
        maxSkillsCount = user.skills.length;
        maxSkillsUser = user;
    }
}

console.log(maxSkillsUser)

let loggedUsersCount = 0

for (const userName in users) {
    const user = users[userName];

    if (user.isLoggedIn && user.points >= 50) {
        loggedUsersCount++;
    }
}

console.log(loggedUsersCount)


