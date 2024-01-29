let pattern = 'love'
let regEx = new RegExp(pattern)

console.log(regEx)

let pattern2 = 'love'
let flag = 'gi'
let regEx2 = new RegExp(pattern, flag)

console.log(regEx2)

let regEx3 = new RegExp('love', 'gi')

console.log(regEx3)

let regEx4 = /love/gi

const str3 = 'I love Javascript'
const pattern3 = /love/
const result3 = pattern3.test(str3)

console.log(result3)
