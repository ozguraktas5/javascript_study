const dog = {};
console.log(dog);

dog.name = "Lucy";
dog.legs = "Short";
dog.color = "Brown";
dog.age = 4;

console.log(dog);

dog.bark = function () {
  console.log("Woof Woof!");
};

console.log(dog);

dog.breed = "Terrier";
dog.getDogInfo = function () {
  return `My dog name is ${this.name}. It is ${this.age} years old.`;
};

console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const userName in users) {
  const user = users[userName];

  if (user.skills.length > maxSkillsCount) {
    maxSkillsCount = user.skills.length;
    maxSkillsUser = user;
  }
}

console.log(maxSkillsUser);

let loggedUsersCount = 0;

for (const userName in users) {
  const user = users[userName];

  if (user.isLoggedIn && user.points >= 50) {
    loggedUsersCount++;
  }
}

console.log(loggedUsersCount);

// let mernUser = []

// for (const userName in users) {
//     const user = users[userName];

//     if (user.skills.includes('MongoDB')) {
//       mernUser.push(user)
//     }
// }

// console.log(mernUser)

const mernUser = Object.values(users).filter(
  (user) =>
    user.skills.includes("MongoDB") &&
    user.skills.includes("Express") &&
    user.skills.includes("React") &&
    user.skills.includes("Node")
);

console.log(mernUser);

const copyUser = Object.assign({}, users);

copyUser["Alex"] = "Ozgur";
console.log(users);
console.log(copyUser);

const keys2 = Object.keys(users);
console.log(keys2);

const values2 = Object.values(users);
console.log(values2);

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName}'s account`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    const balance = this.totalIncome() - this.totalExpense();
    return `Balance: ${balance}`;
  },
};

personAccount.firstName = "Ozgur";
personAccount.lastName = "Aktas";

personAccount.addIncome("Social Media", 600);
personAccount.addIncome("Freelance", 200);

personAccount.addExpense("Groceries", 400);

console.log(personAccount.accountInfo());
console.log(`Total Income: ${personAccount.totalIncome()}`);
console.log(`Total Expense: ${personAccount.totalExpense()}`);
console.log(personAccount.accountBalance());

const users3 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products3 = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp (username, email, password) {
  const existingUser = users3.find(user => user.username === username || user.email === email);

  if (existingUser) {
    console.log('Bu kullanicinin hesabi var.')
    return 
  }

  const newUser = {
    _id: generateId(),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  };

  users3.push(newUser)
  console.log('Kullanici basariyla kaydedildi.')
}

function generateId() {
  return Math.random().toString(36).substring(2,8)
}

signUp('OzgurAktas','ozgur123@gmail.com','12345')
console.log(users3)

function signIn(username, password) {
    const user = users3.find(user => user.username === username)

    if (user) {
        if (user.password === password) {
            user.isLoggedIn = true
            console.log(`${username} successfully logged in.`)
        } else {
            console.log("Wrong password")
        }
    } else {
        console.log(`User with username ${username} not found. Please check your username.`)
    }
}

signIn('OzgurAktas','12345')
console.log(users3)

function rateProduct (userId, productId, rating) {
    const user = users3.find(user => user._id === userId)
    const product = products3.find(product => product._id === productId)

    if (user && product) {
        const existingRatingIndex = product.ratings.findIndex(r => r.userId === userId)

        if (existingRatingIndex !== -1) {
            product.ratings[existingRatingIndex].rate = rating;
            console.log(`${user.username} updated the rating for ${product.name}.`)
        } else {
            product.ratings.push({ userId, rate: rating })
        }
    } else {
        console.log(`User or product not found. Please check your user ID and product ID.`)
    }
}

console.log(products3)
rateProduct('fg12cy', 'eedfcf', 4.8);
console.log(products3)

function averageRating(productId) {
    const product = products3.find(product => product._id === productId)

    if (product) {
        const totalRatings = product.ratings.length

        if (totalRatings === 0) {
            console.log(`There are no ratings for ${product.name}.`)
            return 0
        }

        const sumOfRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0)
        const average = sumOfRatings / totalRatings

        console.log(`Average rating for ${product.name}: ${average.toFixed(2)}`)
        return average
    } else {
        console.log(`Product not found. Please check your product ID.`)
        return null

    }
}

averageRating('eedfcf')