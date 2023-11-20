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
