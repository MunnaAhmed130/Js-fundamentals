// run on browser
const arr = [1, 2, 3, 4, 5];
const person = { name: "Adam" };
function greet(name) {
    console.log(arguments);
}
const greet2 = () => console.log("");

/* displays an interactive list of the properties
console.log(person);
console.dir(person);
console.dir(arr);
console.log(arr);
*/
console.dir(greet);

//
console.log("getPrototypeOfPerson", Object.getPrototypeOf(person));
console.log("getPrototypeOfarr", Object.getPrototypeOf(arr));
console.log("getPrototypeOfgreet", Object.getPrototypeOf(greet)); // doesn't work

// get dunder prototype
console.log(person.__proto__);
console.log(arr.__proto__);
console.log(greet.__proto__); // doesn't work

// object's prototype that is from object constructor
console.log(Array.prototype);
console.log(Object.prototype);
console.log(greet.prototype); // get function's prototype
console.log(greet2.prototype); // undefined arrow functions don't have prototype

// getting specific object's prototype and object constructor prototype
let objectPrototype = Object.getPrototypeOf(person) === Object.prototype;
let arrayPrototype = Object.getPrototypeOf(arr) === Array.prototype;

console.log(objectPrototype, Object.prototype === person.__proto__);
console.log(arrayPrototype, Array.prototype === arr.__proto__);
