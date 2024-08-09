//----------------------------------
// () parentheses
// [] bracket/ square bracket
// {} braces / curly braces
// ----------------------------------

// array with constructor
const myArr = new Array(1, 2, 3, 4);

// literal form
let arr = [1, 2];
let i = 0;

// access property/methods
arr.push(3); // dot notation
arr["push"](4); // bracket notation

// console.log(arr);

// ------------- Checking for arrays

console.log("typeof array is", typeof arr); // object

console.log("instanceof of arr", arr instanceof Array); // true

// this is the best way for web developers
console.log("is arr an array", Array.isArray(arr)); // true

// below code may seem to work at a first glance
// but it does not check if arr is an array
// it is used to know if data has length
console.log("arr and arr.length", arr && arr.length ? true : false); // true
let text = "hellow";
console.log("text and text.length", text && text.length ? true : false); // true

// checks both array and its length but returns true only if array has elements
// it will return false if data type is not array or has no element in it
console.log(
  "check array and length",
  Array.isArray(arr) && arr.length ? true : false
);

// --------------- check for data in array

let myArray = [];
let fakeArray = "a";

// Mistake! works for both array and string
// have to check for array and length
let myArrayLength = myArray.length ? true : false;
let fakeArrayLength = fakeArray.length ? true : false;

console.log(
  `array length ${myArrayLength} & fake array length ${fakeArrayLength}`
);

// undefined and null always return false
console.log(
  `undefined returns ${undefined ? true : false}`,
  `null returns ${null ? true : false}`
); // false

// So we check for array and its length
// the output says if the array has data/elements in it
console.log("check myArray and its length", myArray && myArrayLength); // false
console.log("check arr and its length", arr && arr.length ? true : false); // true
console.log("check fakeArray and its length", fakeArray && fakeArrayLength);

// We now have a more concise way!
myArray = [];

// Optional Chaining -  ?. is the optional chaining operator
// optional chaining mainly saves us from errors
// when we try to access properties of undefined or null instead of array
// undefined or null does not have any properties
// when the property is not found optional chanining returns undefined
console.log(
  myArray?.length,
  myArray.length,
  myArray?.length ? true : false,
  myArray?.hello, // undefined
  myArray?.hello ? true : false, // false
  // undefined.length, // error
  undefined?.length, // undefined
  undefined?.length ? true : false, // false
  null?.length, // undefined
  null?.length ? true : false, // false
  fakeArray?.length,
  fakeArray?.length ? true : false
);

// You can use multiple optional chaining in a statement
myArray = [{ id: 10 }];

console.log(myArray?.[0]?.id ? true : false); // true
console.log(myArray?.[0]?.name ? true : false); // false

// null coalescing operator returns RHS if LHS is undefined or null
console.log(myArray?.[0]?.id ?? "no id property");
console.log(myArray?.[0]?.name ?? "no 'name' property on the array"); // returns RHS

//  ------------------- swap values with array without temp variables

[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
console.log(arr);
