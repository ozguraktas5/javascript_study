localStorage.setItem("firstName", "Ozgur");
localStorage.setItem("lastName", "Aktas");
localStorage.setItem("country", "Turkey");
localStorage.setItem("city", "Samsun");

console.log(localStorage)

const student = {
    firstName: "Alev",
    lastName: "Yılmaz",
    age: 33,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
    country: "Turkey",
    registeredKeys: ["firstName", "lastName", "age", "skills", "country", "registeredKeys"]
}

let studentJSON = JSON.stringify(student)
localStorage.setItem('student',studentJSON)
console.log(localStorage)