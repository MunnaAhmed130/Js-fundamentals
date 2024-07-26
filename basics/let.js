// --------------------------------------------------------
// let and const are es6(2015) addition and blocked scoped
// --------------------------------------------------------

try {
  console.log(first);
} catch (err) {
  console.log(err.message); // referneceError: first is not defined
}

// Because temporal dead zone variable cannot be accessed before initialization
try {
  console.log(greet); // ReferenceError: Cannot access 'greet' before initialization
} catch (err) {
  console.log(err.message);
}

// let is block scoped
let greet; // end of temporal dead zone
// because the variable is implicitly initialized with undefined

// after variable declaration/the end of the temporal dead zone the variable is accessible
console.log("'greet' after implicit initialization, The end of the TDZ", greet);

// so cannot redeclare
// SyntaxError: Identifier 'greet' has already been declared
// let greet = "Hi";
// var greet = "Hi";
// const greet = "";

// can re-assign value
greet = "Hey Hi!";

if (true) {
  //  var greet = "hey"; // can not redeclare with var in blocked scope

  // temporal zone inside of a code block
  // console.log("block scoped let variable", greet); // cannot access greet before initialization

  let greet = "hey";
  console.log("block scoped let variable", greet);

  // below is an implicit global
  // greet = ""; // this shouldn't be done use strict mode to avoid this mistake
}

console.log("re-assigned value -", greet);

// temporal zone inside of a code block
try {
  console.log(greet);
  let greet = "";
} catch (err) {
  console.log("TDZ in a code block", err.message);
}
