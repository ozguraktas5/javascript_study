const numbers = [1, 2, 3];
const [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

const names = ["Ozgur", "Ebru", "Alev", "Murat"];
const [nameOne, nameTwo, nameThree, nameFour] = names;

console.log(nameOne, nameTwo, nameThree, nameFour);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontEnd, backend] = fullStack;

console.log(frontEnd, backend);

const numbers2 = [4, 5, 6];
const [numberOne, , numberThree] = numbers2;

console.log(numberOne, numberThree);

const [, secondPerson, , fourthPerson] = names;
console.log(secondPerson, fourthPerson);

const names2 = [undefined, "Ozgur", "Ebru"];
let [namesOne = "Ali", namesTwo, namesThree, namesFour = "Veli"] = names2;

console.log(namesOne, namesTwo, namesThree, namesFour);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [birNumara, ikiNumara, ucNumara, ...kalani] = nums;

console.log(birNumara, ikiNumara, ucNumara, kalani);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack2 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [itemOne, itemTwo, itemThree] of fullStack2) {
  console.log(itemOne, itemTwo, itemThree);
}

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

const rectangle2 = {
  width2: 20,
  height2: 10,
  area2: 200,
};

let { width2, height2, area2, perimeter2 = 60 } = rectangle2;
console.log(width2, height2, area2, perimeter2);

const rectangle3 = {
  width3: 30,
  height3: 10,
  area3: 200,
  perimeter3: 80,
};

let { width3, height3, area3, perimeter3 = 50 } = rectangle3;
console.log(width3, height3, area3, perimeter3);

const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width * rectangle.height);
};

console.log(calculatePerimeter(rect));

const person = {
  firstName: "Ozgur",
  lastName: "Aktas",
  age: 31,
  country: "Turkey",
  job: "Full Stack Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
  ],
  languages: ["Turkish", "English"],
};

const getPersonInfo = (object) => {
  const skills = object.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = object.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${object.firstName} ${object.lastName} lives in ${
    object.country
  }. He is ${object.age} years old. He is an ${
    object.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[1]}. `;

  return personInfo;
};

console.log(getPersonInfo(person));

const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter2(rect));

const getPersonInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[1]} `;

  return personInfo;
};

console.log(getPersonInfo2(person));

const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList) {
  console.log(task, time, completed);
}

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [numOnee, numTwoo, numThreee, ...rest] = nums2

console.log(numOnee, numTwoo, numThreee)
console.log(rest)

const countries2 = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [ger, fra, ...nordic] = countries2
console.log(ger, fra)
console.log(nordic)
