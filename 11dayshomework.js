const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

//let {width, height, area, perimeter} = rectangle
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

const usersKeys = (users) => {
  const userKeys = users.map((user) => Object.keys(user));
  return userKeys;
};

console.log(usersKeys(users));

const lessThanTwoSkills = (users) => {
  let emptyArray = [];
  for (const user of users) {
    if (user.skills.length < 2) {
      emptyArray.push(user.name);
    }
  }
  return emptyArray;
};

console.log(lessThanTwoSkills(users));

import countries_data from "./countries_data.js";

const destructureTheCountries = (countries_data) => {
  for (const country of countries_data) {
    console.log(country.name);
    console.log(country.capital);
    console.log(country.population);
    console.log(country.languages);
  }
};

console.log(destructureTheCountries(countries_data));

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(students) {
  const objectStudents = students.map(([name, skills, scores]) => {
    return {
      name,
      skills,
      scores: {
        HTML: scores[0],
        CSS: scores[1],
        JS: scores[2],
        React: scores[3],
      },
    };
  });
  return objectStudents;
}

console.log(convertArrayToObject(students));

const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = {...student2}

const frontendSkills = newStudent.skills.frontEnd;
const hasBootstrap = frontendSkills.includes(skill => skill.skill === "Bootstrap");
if (!hasBootstrap) {
  frontendSkills.push({ skill: "Bootstrap", level: 8 });
}

console.log(newStudent)

const backendSkills = newStudent.skills.backEnd;
const hasExpress = backendSkills.includes(skill => skill.skill === "Express");
if (!hasExpress) {
  backendSkills.push({ skill: "Express", level: 9 });
}

console.log(newStudent)

const databaseSkills = newStudent.skills.dataBase;
const hasSQL = databaseSkills.includes(skill => skill.skill === "SQL");
if (!hasSQL) {
  databaseSkills.push({ skill: "SQL", level: 8 });
}

console.log(newStudent)

const dataScienceSkills = newStudent.skills.dataScience;
const hasSQL2 = dataScienceSkills.includes(skill => skill === "SQL");
if (!hasSQL2) {
  dataScienceSkills.push("SQL");
}

console.log(newStudent)

