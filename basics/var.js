// var with strict mode

// "use strict"; // es5, its a literal expression for strict mode

// var is global scoped and function scoped, hoisted

// var is global scoped when declared outside of a function otherwise function scoped
// var hoists the declaration to the top of the scope and initializes with undefined

console.log("var before declaration and initialization", number); // undefined
var number = "12345";

// both will overwrite value
var number = "1234"; // redeclear variable
number = "123"; // re-assign value

// redeclear variable  let and const
// const number = "1234"; // syntaxError
// let number = "1234"; // syntaxError

function myFunction() {
  // because var is function scoped
  var user = "adam"; // variable is not available outside a function
}

// cannot access function scoped value
// console.log(user);   // ReferenceError: user is not defined

// var is added as a non-configurable property of the global window object
// so it is accessible from the global - window object with this keyword
// console.log("global", this.number); // browser code

console.log("greet before explicit declaration and initialization", greet); // undefined
var greet;
console.log("greet after declaration but before initialization", greet); // undefined
greet = "Hi";
console.log("greet after declaration and initialization", greet); // "Hi"

// var is not block scoped
if (true) {
  var greet = "Hi again"; // so this value leaks outside
}

// but only if it executes because the code block below is not executed
// it's value does not leak
if (false) {
  var greet = "Hi again again";
}

console.log(
  "the globally accessible redeclared value of greet in block scope",
  greet
); // "Hi again"
