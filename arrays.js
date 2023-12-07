// Array.from()
let val = Array.from(Array(10).keys()).map((x) => x + 1);
val = Array.from(Array(10), (_, x) => x + 1);
val = Array.from({ length: 10 }, (_, i) => i + 1);

// Array()
val = [...Array(10).keys()].map((x) => x + 1);
val = Array(10)
    .fill()
    .map((_, x) => x + 1);
// console.log(val, val[10]);

let arr = [1, 2];
let i = 0;
// swap values with array
[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.splice(2, 0, "Lemon", "Kiwi"); // add
// let fruit = fruits.splice(2, 1); // delete
// let fruit = fruits.splice(2, 1, "Lemon", "Kiwi"); // add & delete

let removedFruits = fruits.slice(-2); //  a copy
console.log(fruits, removedFruits);
console.log(fruit);
