const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 32;
let isMarried = false;
const student = {
  firstName: "Ozgur",
  lastName: "Kaya",
  age: 32,
  isMarried: false,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const txt = `{
    "Ali": {
        "email": "a@a.com",
        "skills": [
            "HTML",
            "CSS",
            "JS"
        ],
        "age": 12,
        "isLoggedIn": false,
        "points": 30
    },
    "Veli": {
        "email": "v@v.com",
        "skills": [
            "HTML",
            "CSS",
            "JS",
            "React"
        ],
        "age": 15,
        "isLoggedIn": false,
        "points": 50
    },
    "Zeynep": {
        "email": "z@z.com",
        "skills": [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux"

        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 40
    }
}`;

const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON)

const ageJSON = JSON.stringify(age);
console.log(ageJSON)

const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON)



