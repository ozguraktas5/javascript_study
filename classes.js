class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person();
console.log(person);

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person2 = new Person2("Ahmet", "Görgülü");
console.log(person2);

class Person3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person3 = new Person3("Özgür", "Aktaş");
const person4 = new Person3("Ebru", "Taneli");
const person5 = new Person3("Alev", "Yılmaz");

console.log(person3);
console.log(person4);
console.log(person5);

class Person4 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person6 = new Person4("Sinan", "Yeşil", 27, "Türkiye", "İstanbul");

console.log(person6);

class Person5 {
  constructor(
    firstName = "Ali",
    lastName = "Çelebi",
    age = 31,
    country = "Türkiye",
    city = "Adıyaman"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person7 = new Person5();
const person8 = new Person5("Dilek", "Çiçek", 37, "Türkiye", "Mersin");

console.log(person7);
console.log(person8);

class Person6 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person9 = new Person6("Aslı", "Deniz", 19, "Türkiye", "Ankara");
const person10 = new Person6("Ceren", "Aydoğdu", 23, "Türkiye", "İzmir");

console.log(person9.getFullName());
console.log(person10.getFullName());

class Person7 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person11 = new Person7("Veli","Topatar",46, "Türkiye","Antalya")
const person12 = new Person7("Aysel","Duman",43, "Türkiye","Kars")

console.log(person11.score)
console.log(person12.score)

console.log(person11.skills)
console.log(person12.skills)

class Person8 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person13 = new Person8("Çağrı","Selim",41, "Türkiye","Bursa")
const person14 = new Person8("Nurdan","Kınık",40, "Türkiye","Bolu")

console.log(person13.getScore)
console.log(person14.getScore)

console.log(person13.getSkills)
console.log(person14.getSkills)