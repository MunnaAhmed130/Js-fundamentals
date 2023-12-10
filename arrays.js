let arr = [1, 2];
let i = 0;
// swap values with array
[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// console.log(arr);

// ----------------------------------

// Checking for empty arrays
let myArray = [];

// Mistake! only works if you r sure it is an array
console.log(myArray.length ? true : false);

myArray = undefined;
console.log(undefined ? true : false);

// Error
// console.log(myArray.length); // undefined
// console.log(myArray.length ? true : false);

// So we learned to do this
console.log(myArray && myArray.length ? true : false);

// We now have a more concise way!
myArray = [];

// Optional Chaining
console.log("optional chaining", myArray?.length ? true : false);
console.log(myArray?.length);

// ?. is the optional chaining operator
// You cna use more than one

myArray = [{ id: 100 }];

console.log(myArray?.[0]?.id ? true : false);
console.log(myArray?.[0]?.name ? true : false);

// null coalescing operator
console.log(myArray?.[0]?.id ?? "no id property");
console.log(myArray?.[0]?.name ?? "no name property");

// If need to find out if it is an array
myArray = "David";

// This does not work
console.log(myArray && myArray.length ? true : false); // true

// this is the way to be sure
console.log(Array.isArray(myArray));

// so if completely unsure
myArray = [{ id: 10 }];

console.log(
    "check array",
    Array.isArray(myArray) && myArray.length ? true : false
);

myArray = [];

console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
