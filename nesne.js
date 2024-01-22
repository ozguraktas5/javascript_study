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

console.log(person.getFullName)

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

