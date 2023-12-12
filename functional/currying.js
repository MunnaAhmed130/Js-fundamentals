// Currying -  Named after Haskell B. Curry
// Concept from lambda calculus

// Currying takes a function that receives more than one parameter and breaks it into a series of unary(one parameter) functions

// Therefore, a curried function only takes 1 parameter at a time

// Currying can look like this:
// it works but that's getting ugly and nested the further we go
const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1},${ingredient2},${ingredient3}`;
        };
    };
};

// call curried function
const mySandwich = buildSandwich("Bread")("Tomato")("Chicken");

// partially applied functions are a common use of currying
const sandwich = buildSandwich("Bread")("Chicken");
// console.log(sandwich("Tomato"));

// Let's refactor

const refactorSandwich = (ingredient1) => (ingredient2) => (ingredient3) =>
    `${ingredient1},${ingredient2},${ingredient3}`;

// Another example

const updateElemText = (id) => (content) => {
    document.querySelector(`#${id}`).textContent = content;
};

// const updateHeaderText = updateElemText("header");
// updateHeaderText("Hello World");

// Another common use of currying is function composition
// Allows calling small functions in a specific order

const addCustomer =
    (fn) =>
    (...args) => {
        console.log("saving customer info...");
        return fn(...args);
    };

const processOrder =
    (fn) =>
    (...args) => {
        console.log(`processing order #${args[0]}`);
        return fn(...args);
    };

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`);
};

// calling processOrder with completeOrder as argument
completeOrder = processOrder(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");
// const value = addCustomer(processOrder(completeOrder))("1000");

// above code is the same as
// function addCustomer(...args) {
//     return function processOrder(...args) {
//         return function completeOrder(...args) {
//             // end
//         };
//     };
// }

// Requires a function with a fixed number of parameters
const curry = (fn) => {
    return (curried = (...args) => {
        if (fn.length !== args.length) {
            // bind creates new function
            return curried.bind(null, ...args);
        }
        return fn(...args);
    });
};

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
// you can check a function's parameter count with funcName.length
// console.log(total.length);
