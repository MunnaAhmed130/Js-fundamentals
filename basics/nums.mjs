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

const value = "1.2$";

console.log(Number(value), parseFloat(value), parseInt(value));

let x = NaN;
console.log(x === x);
console.log(isNaN(x), isNaN("hello"));
console.log(Number.isNaN("hello"), Number.isNaN("hello"));
