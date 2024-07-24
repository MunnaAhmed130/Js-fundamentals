// variables holding primitive data types directly contain the primitive value
// below are the examples of primtive literals

// string delimited with single or double qoutes
let text = "john";

// Any integer or floating-point numeric value
let integer = 1;
let floatingPoint = 1.47;
let nan = NaN; // non a number is also number data type

// boolean has two values true or false
let boolean = true;

// null has only one value, null
let empty = null; // explicit

// undefined has only one value, undefined
let unDefined; // implicit undefined
unDefined = undefined; // explicit

let bigInt = 20000n; // bigInt
let symbol = Symbol(); // symbol

// -----------------------------------
// Identifying primitives with typeof
// -----------------------------------

console.log("text -", typeof text);

console.log(
  "integer, floating point and NaN -",
  typeof integer,
  typeof floatingPoint,
  typeof nan
);

console.log("true and false -", typeof boolean);

console.log("undefined -", typeof unDefined, typeof undefined);

console.log("big Integer -", typeof bigInt);

console.log("symbol -", typeof Symbol(), typeof symbol);

console.log("null -", typeof null, "why?"); // null is tricky

// to check for null we can directly compare with null itself
console.log(empty === null);
// or
console.log(Object.is(empty, null));
