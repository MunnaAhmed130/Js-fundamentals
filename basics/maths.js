console.log("math");
console.log(Math);

// console.log(Math.abs(-4)); // return positive number
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9));

const arr = [4, 6, 4, 9, 2, 1];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

console.log(Math.random()); // greater than or equal to 0 and less than 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
