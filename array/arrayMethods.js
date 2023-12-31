// -----------  basic  ----------------
const arr = [1, 2, 3];
arr.push(4);
// console.log(arr);
arr.pop();
// console.log(arr);
arr.shift(); // remove first element
// console.log(arr);
arr.unshift(1); // add first element
// console.log(arr);
// console.log(arr.includes(1), arr.indexOf(1), arr[0]);

// ----------------- destructuring ----------

let [num1, num2, num3] = arr;
// console.log(num1, num2, num3);

// swapping values like this is possible because of destructuring
[num3, num2, num1] = [num1, num2, num3];
// console.log(num1, num2, num3);

// const [num1 ]

// ---------------------- rest parameter
const [num, ...rest] = arr;
console.log(...rest);

// ---------------------shallow copies ------------
const arr2 = [4, 5, 6];

let newArr = arr.concat(arr2);
console.log(newArr);

newArr = [...arr, ...arr2];
console.log(newArr);

// ----------------------- flat --------------------

const array = [1, 2, 3, [4], [5, [6, 7]], 8, 9];
console.log(array.flat(Infinity));

// -----------------------
console.log(Array.of("Hello"));
console.log(Array.from(Object.keys({ name: "adam" })));
// ------------- creating arrays -------------
// Array.from()
let vals = Array.from(Array(10).keys()).map((x) => x + 1);
vals = Array.from(Array(10), (_, x) => x + 1);
vals = Array.from({ length: 10 }, (_, i) => i + 1);

// Array()
vals = [...Array(10).keys()].map((x) => x + 1);
vals = Array(10)
    .fill()
    .map((_, x) => x + 1);
// console.log(val, val[10]);

// ---------------- slice / splice -------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// slice doesn't mutates the array
let removedFruits = fruits.slice(-2); //  a copy
// console.log(fruits, removedFruits);

// splice mutates the array
// let fruit = fruits.splice(2, 0, "Lemon", "Kiwi"); // add
let fruit = fruits.splice(2, 1); // remove an element
// let fruit = fruits.splice(2, 1, "Lemon", "Kiwi"); // add & delete
console.log(fruit, fruits);
