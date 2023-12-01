const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const dispatch = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};

let x = 5;
let y = 4;
let operator = "+";

console.log(`${x} + ${y} =`, dispatch[operator](x, y));
