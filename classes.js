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

class Person9 {
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
  
  set setScore(score) {
    this.score += score;
  }

  set setSkill(skills) {
    this.skills.push(skills);
  }
}

const person15 = new Person9("Murat","Bulut",30, "Türkiye","Ordu")
const person16 = new Person9("Eren","Yılmaz",27, "Türkiye","Sivas")

person15.setScore = 1
person15.setSkill = "Java"
person15.setSkill = "Python"
person15.setSkill = "JavaScript"

person16.setScore = 2
person16.setSkill = "C++"
person16.setSkill = "C#"
person16.setSkill = "Php"

console.log(person15.score)
console.log(person16.score)

console.log(person15.skills)
console.log(person16.skills)

class Person10 {
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
    return fullName
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person17 = new Person10("Taylan","Sönmez",24, "Türkiye","Malatya")
const person18 = new Person10("Merve","Kaya",22, "Türkiye","Sinop")
const person19 = new Person10("Alim","Öztürk",60,"Türkiye","Edirne")

person17.setScore = 1
person17.setSkill = 'HTML'
person17.setSkill = 'CSS'
person17.setSkill = 'JavaScript'

person18.setScore = 1
person18.setSkill = 'Planning'
person18.setSkill = 'Managing'
person18.setSkill = 'Organizing'

console.log(person17.getScore)
console.log(person18.getScore)

console.log(person17.getSkills)
console.log(person18.getSkills)
console.log(person19.getSkills)

console.log(person17.getPersonInfo())
console.log(person18.getPersonInfo())
console.log(person19.getPersonInfo())

class Person11 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person11.favoriteSkill())
console.log(Person11.showDateTime())
