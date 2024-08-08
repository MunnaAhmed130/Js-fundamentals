/*
  Functions are reference values/objects in JavaScript.

  The internal property named [[Call]] distinguishes function from other objects.
  [[Call]] property indicates that the object can be executed.

  ECMAScript defines multiple internal properties for objects in JavaScript.
  These internal properties are indicated by double-square-bracket notation and are not accessible via code.

  The typeof operator defined by ECMAScript to return "function" for any object [[Call]] property.
*/

// there are 3 literal forms of functions - declarations, expressions and arrow function

// -------------- function declaration
// function statement / declaration / definition / named
// has function name
// doesn't have semicolon at the end of the function
// only function declarations are hoisted to the top of the context

// declarations are hoisted so this works
console.log("typeof greet -", typeof greet); // function
console.log(greet());

// default parameter
function greet(name = "user") {
  console.log("arguments object", arguments);
  return `Hello ${name}!`;
}

// function call with arguments
console.log(greet("John", "de", "bourgh", 10)); // {}
console.log("prototype", greet.prototype);

// -------------------- function expression

// function expression is treated like a value and gets assigned into a variable
// that variable can then be called as a function
// doesn't have a function name
// have semicolon at the end of the function
// considered anonymous, typically referenced by a variable or property
// they are not hoisted to the top of the context

// console.log(typeof greeting); // referenceError for let or const, undefined for var

// try changing the variable keyword with let or const
let greeting = function (name = "user") {
  console.log("arguments object", arguments);
  return `Hello ${name}!`;
};

console.log("typeof greeting", typeof greeting);
console.log(greeting("hello", "world"));
console.log(greeting());
console.log("prototype", greeting.prototype);

// ------------------- arrow function
// arrow functions don't have arguments property
const greet2 = (user = "user") => {
  // console.log(arguments); // uncaught referenceError: arguments is not defined
  return `Hello ${user}`;
};

greet2("Hello", "World");
console.log(greet2.prototype); // arrow function don't have any prototype

var result = 0;
function addFive(num) {
  return (result = num + 5);
}

console.log(result); // output 0
console.log(addFive(result)); // output 5
console.log(addFive(10)); // output 15
console.log(result); // output 0

// rest operator
function add(...rest) {
  console.log(rest);
}

add(5, 4);
