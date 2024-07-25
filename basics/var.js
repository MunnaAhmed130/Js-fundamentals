"use strict";
// ---------------------------------------------------
// var is global scoped and function scoped, hoisted
// var hoists the declaration to the top of the scope and initializes with undefined
//console.log(accountPassword); // undefined
var accountPassword = "12345";

// both will overwrite value
// var accountPassword = "1234"; // redeclear value
// accountPassword = "123";

function myFunction() {
  var user = "adam"; // functions scoped not available outside a function
}
//console.log(user); // ReferenceError: user is not defined

// var is global variable so accessible from this - window object
// console.log("global", this.accountPassword); // browser code

// console.log(greet); // undefined
var greet;
// console.log(greet); // undefined
greet = "Hi";
// console.log(greet); // "Hi"

// var is not block scoped
if (true) {
  var greet = "Hi again"; // so this value leaks outside
}

if (false) {
  var greet = "Hi again again";
}

console.log(greet); // "Hi again"

// you can also declare variable without any keyword and it will be a global variable
name = "hey"; // this should be avoided and can be avoided by using strict mode
console.log(name);
