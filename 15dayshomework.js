class Animal {
    constructor (name, age, color, legType) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legType = legType;
    }
}

const animal = new Animal("Lion", 4, "black", "4 legs");
console.log(animal)

class Dog extends Animal {
    bark() {
        console.log("Woof Woof");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meow Meow");
    }
}