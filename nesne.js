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