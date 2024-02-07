class Animal {
  constructor(name, age, color, legType) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legType = legType;
  }
}

const animal = new Animal("Lion", 4, "black", "4 legs");
console.log(animal);

class Dog extends Animal {
  bark() {
    console.log("Woof Woof");
  }
}

class Cat extends Animal {
  constructor(name, age, color, legType, size) {
    super(name, age, color, legType);
    this.size = size;
  }
  meow() {
    console.log("Meow Meow");
  }
}

const dog = new Dog("Lion", 4, "black", "4 legs");
console.log(dog);
dog.bark();
const cat = new Cat("Lion", 4, "black", "4 legs", "large");
console.log(cat);
cat.meow();

let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(data) {
    this.data = data;
  }
  mean() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return Math.round(sum / this.data.length);
  }

  median() {
    let sorted = this.data.sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
      return Math.round(
        (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      );
    } else {
      return Math.round(sorted[(sorted.length - 1) / 2]);
    }
  }
  mode() {
    let sorted = this.data.sort((a, b) => a - b);
    let mode = [];
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        count++;
      } else {
        if (count > maxCount) {
          maxCount = count;
          mode = [sorted[i]];
        } else if (count == maxCount) {
          mode.push(sorted[i]);
        }
        count = 0;
      }
    }
    return mode;
  }
  range() {
    return Math.max(...this.data) - Math.min(...this.data);
  }
  variance() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += Math.pow(this.data[i] - this.mean(), 2);
    }
    return Math.round(sum / this.data.length);
  }
}
let stats = new Statistics(ages);
console.log(`The Mean is: ${stats.mean()}`);
console.log(`The Median is: ${stats.median()}`);
console.log(`The Mode is: ${stats.mode()}`);
console.log(`The Range is: ${stats.range()}`);
console.log(`The Variance is: ${stats.variance()}`);
