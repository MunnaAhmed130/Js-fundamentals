/*
 Reference types represent `objects` in JS.
 Reference values are instances of reference types and are synonymous with objects.
 Reference types do not store the object instance directly into the variable
 it holds a pointer/reference to the location in memory where the object exists.

 When you assign an object to a variable, you’re actually assigning a pointer. 
 That means if you assign one variable to another, each variable gets a copy of the pointer, and both still reference the same object in memory.
*/

// create reference type with constructor or literal forms
// with constructor
let object = new Object(); // {}
let list = new Array(); // []
let doSomething = new Function(); // Avoid using constructor form for function

// and their literal forms
let doAnotherthing = function () {}; // function
let list1 = []; // arrays are spacial built-in object
let object1 = {}; // object

// console.log(object, object1);
// console.log(list, list1);
// console.log(doSomething, doAnotherthing);

// object

// using literals doesn't call new Object()
// but JS engine follows the same steps for both objects
// It's the same for all reference literals
const book = {
  name: "The Principles of Object-Oriented JavaScript",
  year: 2014,
};

const book1 = new Object();
book1.name = "The Principles of Object-Oriented JavaScript";
book1.year = 2014;

// result is the same

// console.log(book);
// console.log(book1);

// array
const colors = ["red", "blue", "green"];
const colors1 = new Array("red", "blue", "green");

// result is the same

// console.log(colors);
// console.log(colors1);

// functions

/*
  using the Function constructor is typically discouraged given the challenges 
  of maintaining, reading, and debugging a string of code rather than actualcode.
  also these functions aren’t recognized by JavaScript debuggers and therefore 
  act as a black box in your application.
*/

function reflect(value) {
  return value;
}
// is the same as
let reflect2 = new Function("value", "return value;");

// result is the same

// console.log(reflect("hello"));
// console.log(reflect2("hello"));

/*-------------------------------------
  Identifying reference types         
  --------------------------------------       */

console.log("typeof book is", typeof book); // object
console.log("typeof colors is", typeof colors); // object
// identifying function is easier others
console.log("typeof reflect is", typeof reflect); // function

/*
  To identify reference types more easily use instanceof operator.
  instanceof takes an object and constructor as parameter
  and returns true or false
*/

console.log("reflect is a function ", reflect instanceof Function); // true
console.log("book is an object", book instanceof Object); // true
console.log("colors is an array", colors instanceof Array); // true

// the instanceof operator can identify inherited types
// all reference types are objects that means they are also instance of Object

console.log("reflect instanceof Function", reflect instanceof Function); // true
console.log("reflect instanceof Object", reflect instanceof Object); // true
console.log("reflect instanceof Array", reflect instanceof Array); // false

console.log("book instanceof Object", book instanceof Object); // true
console.log("book instanceof Array", book instanceof Array); // false
console.log("book instanceof Function", book instanceof Function); // false

console.log("colors instanceof Object", colors instanceof Object); // true
console.log("colors instanceof Array", colors instanceof Array); // true
console.log("colors instanceof Function", colors instanceof Function); // false

// so each reference type is correctly identified as their own data type and Object

console.log(Array.isArray(colors));
// this is more robust way to check for array. Why?
// find out yourselft look through notes or search it up.

// --------------------------------------------------------------------------

let collection = {
  func: function () {},
  null: null,
  array: [1, 2],
  unDefined: undefined,
  object: { name: "john" },
  bigInt: 20000n,
  symbol: Symbol(),
};

// console.log(typeof collection.symbol); // without string
// console.log(typeof collection["symbol"]); // with string

// for (let x in collection) {
//   console.log(collection[x] + " has type of " + typeof collection[x]);
//   console.log(typeof collection[x], x);
// }

// code readability should be high
// alert("");  // browser code

// stack(primitive), Heap(Non-Primitive) but not in JS

// console.log(collection.string);
