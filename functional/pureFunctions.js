/*
    Pure Functions - A part of the Functional Programming paradigm

    Why write pure functions?
    1. Clean code
    2. Easy to test 
    3. Easy to debug
    4. Decoupled and Independent
    5. Could be added to your utility functions
 
    Rules for pure functions
    1. The same input ALWAYS gives the same output
    2. No side effects (no mutations!)
    3. always return something

    no return means you do not have a pure function

*/

// 1. The same input ALWAYS gives the same output

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Munna", "Ahmed"));

/* 
    We can replace the function with the output
    This is called "referential transparency"

    A pure function should have at least one parameter
    Otherwise, it is the same as a constant
    because they can only work with their input

*/

// const firstName = () => "Munna";
// const firstName = "Munna"

// 2. No side effects

// This also means accessing the scope outside the function makes the        function impure
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

/* 
    Pure functions cannot:
    Access a database, API, file system, storage, etc.
    Modify the DOM
    Or even log to the console

    That said, clearly impure functions are necessary
    but they are harder to test and debug

    While writing a pure function
    no input state can be modified
    that means no data should be mutated
    consider all input data to be immutable
*/

// Impure example
// primitive
let x = 1;
const increment = () => ++x;
console.log(increment(), x);

// reference/non-primitive
const myArray = [1, 2, 3];
const addToArray = (arr, data) => {
    arr.push(data);
    return arr;
};

console.log(addToArray(myArray, 4), myArray);

// Refactored
const pureIncrement = (num) => ++num;
console.log(pureIncrement(x), x);

const pureAddToArray = (arr, data) => [...arr, data];
console.log(pureAddToArray(myArray, 5), myArray);

//These common Higher Order functions are pure functions

const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
const doubledNumbers = numbers.map((num) => num * 2);
const summed = numbers.reduce((acc, elem) => acc + elem);
console.log(oddNumbers, doubledNumbers, summed);
console.log(numbers);
