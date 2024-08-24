"use strict"; // es5

// In strict mode
// variable declaration without a keyword is not allowed
// name = "";

// In strict mode, `this` is `undefined` in global function declaration
function showThis() {
  console.log(this);
}

showThis();
