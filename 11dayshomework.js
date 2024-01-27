const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

//let {width, height, area, perimeter} = rectangle
let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w,h,a,p)

const usersKeys = (users) => {
    const userKeys = users.map(user => Object.keys(user))
    return userKeys
}

console.log(usersKeys(users))

const lessThanTwoSkills = (users) => {
    let emptyArray = []
    for (const user of users) {
        if (user.skills.length < 2) {
            emptyArray.push(user.name)
        }
    }
    return emptyArray

}

console.log(lessThanTwoSkills(users))