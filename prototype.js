// run on browser
const arr = [1, 2, 3, 4, 5];
const person = { name: "Adam" };

// displays an interactive list of the properties
console.dir(person);
console.log(person);
console.dir(arr);
console.log(arr);

//
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(arr));

// get dunder prototype
console.log(person.__proto__);
console.log(arr.__proto__);

// object's prototype that is from object constructor
console.log(Array.prototype);
console.log(Object.prototype);
console.log(person.prototype);

// getting specific object's prototype and object constructor prototype
let objectPrototype = Object.getPrototypeOf(person) === Object.prototype;
let arrayPrototype = Object.getPrototypeOf(arr) === Array.prototype;

console.log(objectPrototype, Object.prototype === person.__proto__);
console.log(arrayPrototype, Array.prototype === arr.__proto__);
