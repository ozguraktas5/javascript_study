// {
//     "users" = [
//         {
//             "firstName": "Ozgur",
//             "lastName": "Aktas",
//             "age": 31,
//             "email": "ozgur123@gmail.com"

//         },
//         {
//             "firstName": "Ebru",
//             "lastName": "Taneli",
//             "age": 29,
//             "email": "ebru123@gmail.com"
//         },
//         {
//             "firstName": "Alev",
//             "lastName": "Yılmaz",
//             "age": 25,
//             "email": "alev123@gmail.com"
//         }
//     ]
// }

// {
//     "Ali"= {
//         "email": "alex@email.com",
//         "skills": ["HTML", "CSS", "JS", "React", "Python", "SQL"],
//         "age": 21,
//         "isLoggedIn": false,
//         "points": 40
//     },

//     "Ahmet"= {
//         "email": "ahmet@email.com",
//         "skills": ["HTML", "CSS", "JS", "React", "Java", "Node.js"],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },

//     "Merve"= {
//         "email": "merve@email.com",
//         "skills": ["HTML", "CSS", "JS", "React", "Node.js"],
//         "age": 26,
//         "isLoggedIn": true,
//         "points": 30
//     }

// }

const usersText = `{
    "users" : [
        {
            "firstName": "Samet",
            "lastName": "Aktas",
            "age": 31,
            "email": "samet123@gmail.com"
        },
        {
            "firstName": "Zeynep",
            "lastName": "Taneli",
            "age": 29,
            "email": "zeynep123@gmail.com"
        },
        {
            "firstName": "Ahmet",
            "lastName": "Yılmaz",
            "age": 25,
            "email": "ahmet123@gmail.com"
        }
    ]
}`;

const userObj = JSON.parse(usersText, undefined, 4);

console.log(userObj);

const usersText2 = `{
    "users" : [
        {
            "firstName": "Samet",
            "lastName": "Aktas",
            "age": 31,
            "email": "samet123@gmail.com"
        },
        {
            "firstName": "Zeynep",
            "lastName": "Taneli",
            "age": 29,
            "email": "zeynep123@gmail.com"
        },
        {
            "firstName": "Ahmet",
            "lastName": "Yılmaz",
            "age": 25,
            "email": "ahmet123@gmail.com"
        }
    ]
}`;

const userObj2 = JSON.parse(usersText2, (key, value) => {
  let newValue =
    typeof value === "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});

console.log(userObj2);

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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt)
