localStorage.setItem("firstName", "Ozgur");
console.log(localStorage)

localStorage.setItem('age',56)
console.log(localStorage)

const skills = ['Redux','SCSS','Django','Vue.js']
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills',skillsJSON)
console.log(localStorage)

let skills2 = [
    { tech: 'HTML', level:10 },
    { tech: 'CSS', level:8 },
    { tech: 'JS', level:9 },
    { tech: 'React', level:7 },
    { tech: 'Node', level:6 },
    { tech: 'Python', level:10 },
    { tech: 'SQL', level:8 },
    { tech: 'MongoDB', level:7 },
    { tech: 'Django', level:10 },
    { tech: 'Vue.js', level:9 },
    { tech: 'Express', level:7 },
    { tech: 'Next.js', level:6 },
    { tech: 'Nuxt.js', level:5 },

]

let skillsJSON2 = JSON.stringify(skills2)
localStorage.setItem('skills2',skillsJSON2)

const user = {
    firstName: "Rick",  
    age: 24,
    skills: ["Flutter","Java","Python"],
    
}

const userText = JSON.stringify(user, undefined, 4)
console.log(userText)

let firstName3 = localStorage.getItem('firstName')
let age3 = localStorage.getItem('age')
let skills3 = localStorage.getItem('skills')
console.log(firstName3, age3, skills3)

console.log(localStorage)

localStorage.clear()

console.log(localStorage)