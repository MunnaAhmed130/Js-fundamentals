// import { log } from "../functional/utility.mjs";
const score = 400;

const balance = new Number(100);
// log(balance);

// log(balance.toString().length);
// log(balance.toFixed(2));

const number = 123.4;
// log(number.toPrecision(4));

const hundreds = 100000;
// log(hundreds.toLocaleString("bn-BD"));

// ============ Maths =================
console.log(Math);

console.log(Math.abs(-4)); // return positive number
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));

const arr = [4, 6, 4, 9, 2, 1];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

console.log(Math.random()); // 0 - 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
