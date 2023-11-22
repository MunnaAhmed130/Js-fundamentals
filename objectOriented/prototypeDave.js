// Prototypal Inheritance and the Prototype Chain
// ES6 introduced classes which is the modern way to construct objects
// ES6 classes are considered "syntactic sugar"

// Object literals
const person = {
    alive: true,
};

const musician = {
    plays: true,
};

// both are the same
// musician.__proto__ = person; // old way
Object.setPrototypeOf(musician, person);

// check both are the same
// console.log(Object.getPrototypeOf(musician) == musician.__proto__); // true

console.log(person, musician);
console.log(musician.plays, musician.alive);
// console.log(musician.__proto__.__proto__.__proto__); // null

// Extending the prototype chain
const guitarist = {
    strings: 6,
    __proto__: musician,
};

console.log(guitarist);

/*

Few things to remember
  - No circular references allowed (person.__proto__ can't be guitarist)
  - The __proto__ value must be an object or null
  - An object can only directly inherit from one object

*/

// object with getter and setter methods
const car = {
    doors: 2,
    seats: "vinayl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    },
};

const luxuryCar = {};
// console.log(luxuryCar);
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar, luxuryCar.doors, luxuryCar.valueOf());
console.log(car);

// Getting the keys of an object
console.log(Object.keys(luxuryCar));

// loop through each object key
Object.keys(luxuryCar).forEach((key) => console.log(key));

// But a for...in loop includes inherited props
for (let key in luxuryCar) {
    console.log(key);
}

// Object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear");

console.log(Bear, Bear.species, Bear.walks());

console.log(Bear.__proto__ === Object.getPrototypeOf(Bear));

// The prototype property is where inheritable props and methods are
console.log(Bear.__proto__ === Animal.prototype);

// Now an ES6 Classes example of inheritance

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }
    // prototype method
    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }
    wheelie() {
        return "On one wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

// console.log(Motorcycle.prototype);
const myTruck = new Vehicle();
console.log(myTruck);
