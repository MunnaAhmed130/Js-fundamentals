// "use strict";

// js is dynamically typed
// primitive
let string = "john"; // string
let number = 1; // number
let number2 = 1.47; // number
let nan = NaN; // number
let boolean = true; // boolean
let empty = null; // null

let unDefined; // undefined
unDefined = undefined; // undefined

let bigInt = 20000n; // bigInt
let symbol = Symbol(); // symbol

// non primitive - reference
let func = function () {}; // function
let array = [1, 2]; // array
let object = { name: "john" }; // object

// let collection = {
//     string: "john",
//     number: 1,
//     nan: NaN,
//     boolean: true,
//     func: function () {},
//     null: null,
//     array: [1, 2],
//     unDefined: undefined,
//     object: { name: "john" },
//     bigInt: 20000n,
//     symbol: Symbol(),
// };

// for (let x in collection) {
//     console.log(x + " has type of " + typeof collection[x]);
//     // console.log(typeof collection.x, x);
// }

// code readability should be high
// alert("");  // browser code

// stack(primitive), Heap(Non-Primitive)
