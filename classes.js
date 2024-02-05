class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person = new Person();
console.log(person)

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person2("Ahmet","Görgülü");
console.log(person2)

class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person3 = new Person3("Özgür","Aktaş");
const person4 = new Person3("Ebru","Taneli");
const person5 = new Person3("Alev","Yılmaz");

console.log(person3)
console.log(person4)
console.log(person5)