localStorage.setItem("firstName", "Ozgur");
console.log(localStorage)

localStorage.setItem('age',56)
console.log(localStorage)

const skills = ['Redux','SCSS','Django','Vue.js']
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills',skillsJSON)
console.log(localStorage)