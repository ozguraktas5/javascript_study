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
