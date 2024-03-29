function fullName() {
  console.log("Ozgur Aktas");
}

fullName();

function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName2("Ebru", "Taneli"));

function addNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addNumbers(1, 2));

function areaOfRectangle(width, length) {
  area = width * length;
  return area;
}

console.log(areaOfRectangle(2, 3));

function perimeterOfRectangle(width, length) {
  perimeter = 2 * (width + length);
  return perimeter;
}

console.log(perimeterOfRectangle(4, 5));

function volumeOfRectPrism(length, width, height) {
  volume = length * width * height;
  return volume;
}

console.log(volumeOfRectPrism(4, 5, 6));

function areaOfCircle(r) {
  area = Math.round(Math.PI * r * r);
  return area;
}

console.log(areaOfCircle(5));

function circumOfCircle(r) {
  circumference = Math.round(2 * Math.PI * r);
  return circumference;
}

console.log(circumOfCircle(5));

function density(mass, volume) {
  density = mass / volume;
  return density;
}

console.log(density(120, 3));

function hiz(toplamMesafe, toplamSure) {
  hiz = toplamMesafe / toplamSure;
  return hiz;
}

console.log(hiz(100, 10));

function weight(mass, gravity) {
  weight = mass * gravity;
  return weight;
}

console.log(weight(80, 9.81));

function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bodyMassIndex(82, 1.71));

function checkSeason(month) {
  if (month == "December" || month == "January" || month == "February") {
    return "Winter";
  } else if (month == "March" || month == "April" || month == "May") {
    return "Spring";
  } else if (month == "June" || month == "July" || month == "August") {
    return "Summer";
  } else if (
    month == "September" ||
    month == "October" ||
    month == "November"
  ) {
    return "Autumn";
  }
}

console.log(checkSeason("June"));

function findMax(no1, no2, no3) {
  if (no1 > no2 && no1 > no3) {
    return no1;
  } else if (no2 > no1 && no2 > no3) {
    return no2;
  } else if (no3 > no1 && no3 > no2) {
    return no3;
  }
}

console.log(findMax(124, 346, 457));

function solveLinEquation(a, b, c, x, y) {
  result = a * x + b * y + c;
  return result;
}

console.log(solveLinEquation(1, 2, 3, 4, 5));

function solveQuadEquation(a, b, c) {
  const diskriminant = b ** 2 - 4 * a * c;

  if (diskriminant > 0) {
    const kok1 = (-b - Math.sqrt(diskriminant)) / (2 * a);
    const kok2 = (-b + Math.sqrt(diskriminant)) / (2 * a);
    return [kok1, kok2];
  } else if (diskriminant === 0) {
    const kok = -b / (2 * a);
    return [kok];
  } else {
    const gercekKisim = -b / (2 * a);
    const hayaliKisim = Math.sqrt(Math.abs(diskriminant)) / (2 * a);
    const kok1 = `${gercekKisim} - ${hayaliKisim}i`;
    const kok2 = `${gercekKisim} + ${hayaliKisim}i`;
    return [kok1, kok2];
  }
}

console.log(solveQuadEquation(1, -1, -2));

function printArray([...args]) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let seconds = date.getSeconds();
  return `${month}/${day}/${year} ${hour}:${seconds}`;
}

console.log(showDateTime());

function swapValues(a, b) {
  a, (b = b), a;
  return [b, a];
}

console.log(swapValues(10, 20));

let emptyArray = [];
function reverseArray([...args]) {
  for (let i = args.length - 1; i >= 0; i--) {
    emptyArray.push(args[i]);
  }
  return emptyArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(inputArray) {
  if (!Array(inputArray)) {
    console.error("Input is not an array");
  }

  const capitalizeArray = inputArray.map((item) => {
    if (typeof item !== "string") {
      console.error("Non-string element found in the array.");
      return item;
    }

    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return capitalizeArray;
}

console.log(capitalizeArray(["apple", "banana", "orange"]));

let bosArray = [];

function addItem(item) {
  bosArray.push(item);
  return bosArray;
}

console.log(addItem("apple"));
console.log(addItem("orange"));

let doluArray = ["apple", "banana", "orange"];

function removeItem(indexRemove) {
  doluArray.splice(indexRemove, 1);
  return doluArray;
}

console.log(removeItem(0));

let sum = 0;
function sumOfNumbers(number1, number2) {
  for (let i = number1; i <= number2; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(1, 5));

let sumOdd = 0;
function sumOfOdds(number1, number2) {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  return sumOdd;
}

console.log(sumOfOdds(1, 5));

let sumEven = 0;
function sumOfEven(number1, number2) {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    }
  }
  return sumEven;
}

console.log(sumOfEven(1, 5));
let evenNumber = 0;
let oddNumber = 0;
function evensAndOdds(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evenNumber += 1;
    } else {
      oddNumber += 1;
    }
  }
  return `The number of odds are ${oddNumber}\nThe number of evens are ${evenNumber}`;
}

console.log(evensAndOdds(100));

let toplam = 0;
function toplamArguman(args) {
  for (let i = 0; i <= args; i++) {
    toplam += i;
  }
  return toplam;
}

console.log(toplamArguman(5));

function generateRandomIP() {
  const number1 = Math.floor(Math.random() * 256);
  const number2 = Math.floor(Math.random() * 256);
  const number3 = Math.floor(Math.random() * 256);
  const number4 = Math.floor(Math.random() * 256);

  return `${number1}.${number2}.${number3}.${number4}`;
}

console.log(generateRandomIP());

function userIdGeneratedByUser() {
  let characterCountInput = prompt("Please enter the number of characters");
  let userIdCountInput = prompt(
    "Please enter the number of IDs to be generated"
  );

  if (!characterCountInput || !userIdCountInput) {
    console.error("You have not made valid entries. Please try again.");
    return;
  }

  let characterCount = parseInt(characterCountInput);
  let userIdCount = parseInt(userIdCountInput);

  if (isNaN(characterCount) || isNaN(userIdCount)) {
    console.error("You have not made valid entries. Please try again.");
    return;
  }

  for (let i = 0; i < userIdCount; i++) {
    let userId = generateUserId(characterCount);
    console.log("Generated ID: " + userId);
  }
}

function generateUserId(characterCount) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let userId = "";

  for (let i = 0; i < characterCount; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    userId += characters.charAt(randomIndex);
  }

  return userId;
}

//userIdGeneratedByUser()

function rgbColorGenerator() {
  let randomNumber1 = Math.floor(Math.random() * 256);
  let randomNumber2 = Math.floor(Math.random() * 256);
  let randomNumber3 = Math.floor(Math.random() * 256);

  return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

console.log(rgbColorGenerator());

function arrayOfHexaColors(length) {
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "#";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

console.log(arrayOfHexaColors(1));

function arrayOfRgbColors(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(
      `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`
    );
  }
  return result;
}

console.log(arrayOfRgbColors(3));

function convertHexaToRgb(hexaColor) {
  hexaColor = hexaColor.replace(/^#/, "");

  let red = parseInt(hexaColor.substring(0, 2), 16);
  let green = parseInt(hexaColor.substring(2, 4), 16);
  let blue = parseInt(hexaColor.substring(4, 6), 16);

  let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  return rgbColor;
}

let hexaColor = "#673a54";

console.log(convertHexaToRgb(hexaColor));

function convertRgbToHexa(rgbColor) {
  let regexResult = rgbColor.match(/\d+/g);

  if (!regexResult || regexResult.length !== 3) {
    console.error("Geçersiz RGB renk kodu. Örnek: 'rgb(158, 25, 85)'");
    return null;
  }

  let red = parseInt(regexResult[0]);
  let green = parseInt(regexResult[1]);
  let blue = parseInt(regexResult[2]);

  let hexaColor = "#" + red + green + blue;

  return hexaColor;
}

let rgbColor = "rgb(58, 25, 85)";

console.log(convertRgbToHexa(rgbColor));

function generateColors(count, format = "hex") {
  let result = [];

  for (let i = 0; i < count; i++) {
    if (format === "hex") {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else if (format === "rgb") {
      color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    } else {
      throw new Error(
        "Invalid color format. Supported formats: 'hex' or 'rgb'"
      );
    }
    result.push(color);
  }
  return result;
}

console.log(generateColors(3, "rgb"));
console.log(generateColors(4, "hex"));

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));

function isEmpty(param) {
  if (param.length === 0) {
    return "Empty";
  } else {
    return "Not Empty";
  }
}

console.log(isEmpty(false));

function sumNumber(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumNumber(1, 2, 3));

function sumOfArrayItems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      console.error("Lutfen sayi giriniz.");
      return;
    } else {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumOfArrayItems([1, 2, 2]));

function averageNumber(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      return "Lutfen sayi giriniz.";
    }
    sum += array[i];
    average = sum / array.length;
  }
  return average;
}

console.log(averageNumber([1, 3, 5, "a"]));

function modifyArray(array) {
    if (array.length < 5) {
        console.error('item not found')
    } else {
        array[4] = array[4].toUpperCase()
    }
    return array
}

console.log(modifyArray(["a","b","c","d","e","f"]))

function isPrime(number) {
  isPrime = true
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false
    }
    
  }
  return isPrime
}

console.log(isPrime(7))