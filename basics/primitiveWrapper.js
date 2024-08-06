/*
  primitive wrapper types are special reference types that are automatically created behind the scenes.
  They exist to make working with primitive values feel like working with objects.

  JS has 3 primitive wrapper types - Boolean, Number, String.

  Without 'null' and 'undefined' all primitive values have object
   equivalents that wrap around the value.
  homework: check if symbol and bigint have primitive wrapper types.
*/

let str = "My name is Adam";

let strLength = str.length; // length property on a string shouldn't be possible
console.log(strLength); // but this works fine

// ----------------  behind the scene

// new String(), wrapper function, a constructor function, creates a string object
// these wrapper data types are implicitly created
let strObj = new String(str);
// console.dir(strObj);

strLength = strObj.length; // calling a method on the object instance

strObj = null; // dereference the instance immediately
console.log(strObj, strLength);

// ----------------------------------------------

console.log(str.length === new String(str).length); // true

// the wrapper type objects gets destroyed after one statement - autoboxing

str.name = "adam"; // 1st line
console.log(str.name); // 2nd line  - outputs undefined

// -------------------- behind the scene what the JS engine does for the 1st line

let temp = new String(str); // temporary variable is created
temp.name = "adam"; // value is added
temp = null; // but later destroyed

// --------------------- behind the scene what the JS engine does for the 2nd line

let temp = new String(str); // temporary variable is created
console.log(temp.name); // undefined
temp = null; // tamp variable is destroyed
