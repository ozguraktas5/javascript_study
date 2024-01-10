// let age = prompt("Enter your age:")
// if (parseInt(age) >= 18) {
//     console.log('You are old enough to drive.')
// } else {
//     console.log(`You are left with ${18-parseInt(age)} years to drive.`)
// }

// let myAge = 32
// let yourAge = prompt("Enter your age:")

// if (parseInt(yourAge) > myAge) {
//     console.log(`You are ${parseInt(yourAge)-myAge} years older than me.`)
// } else {
//     console.log(`I am ${myAge-parseInt(yourAge)} years older than your.`)
// }

// let a = 2
// let b = 3

// a > b
//     ? console.log('a, b den büyüktür')
//     : console.log('b, a den büyüktür')

// let number = prompt("Enter a number:")

// number % 2 == 0
//     ? console.log(`${number} is an even number`)
//     : console.log(`${number} is an odd number`)

// let puan = prompt("Puaninizi giriniz:")

// if (80 <= puan && puan <= 100) {
//     console.log('A')
// } else if (70 <= puan) {
//     console.log('B')
// } else if (60 <= puan) {
//     console.log('C')
// } else if (50 <= puan) {
//     console.log('D')
// } else if (0 <= puan)  {
//     console.log('F')
// } else {
//     console.log('0-100 arasinda puan girin.')
// }

// let ay = prompt("Ay giriniz:")

// if (ay == "eylül" || ay == "ekim" || ay == "kasim") {
//     console.log("Sonbahar")
// } else if (ay == "aralik" || ay == "ocak" || ay == "subat") {
//     console.log("Kis")
// } else if (ay == "mart" || ay == "nisan" || ay == "mayis") {
//     console.log("İlkbahar")
// } else if (ay == "haziran" || ay == "temmuz" || ay == "agustos") {
//     console.log("Yaz")
// } else {
//     console.log("Gecerli bir ay giriniz.")
// }

let month = prompt("Enter a month: ");
let year = parseInt(prompt("Enter a year: "));
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days in ${year}.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days in ${year}.`);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days in ${year}.`);
      break;
    } else {
      console.log(`${month} has 28 days in ${year}.`);
      break;
    }
  default:
    alert("Please enter a valid month name!");
    break;
}
