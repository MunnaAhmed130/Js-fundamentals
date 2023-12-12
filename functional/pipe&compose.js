/*
    Functional Programming

    Often uses pipe and compose = higher order functions

    A HOF is any function which takes a function as an argument, returns a function, or both

*/

// Here's how a "compose" function works:

// Start with small unary (one parameter) functions
const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the function execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));
// console.log(result);

// The above is Not a compose function - let's make one

/*

    Making our own compose and pipe functions

    Note: Randa.js and lodash libraries have their own built-in compose and pipe functions. lodash calls pipe "flow".

    The HOF "reduce" takes a list of values and applies a function to each of those values, accumalating a single result.

*/

// understanding reduce and reduceright
// const reduce = ["adam", "eve"].reduce((prevStr, str) => prevStr + str);
// console.log("reduce", reduce);

/*
    To get the compose order from right to left as we see with nested function calls in our example above, we need reduceRight
*/

const compose =
    (...fns) =>
    (val) =>
        fns.reduceRight((prev, fn) => fn(prev), val);

console.log("COMPOSE", compose(multiplyBy5, subtract1, add2)(4));

/*
    To do the same, but read from left to right... we use "pipe".
    It is the same except uses reduce instead of reduceRight
*/

const pipe =
    (...fns) =>
    (val) =>
        fns.reduce((prev, fn) => fn(prev), val);

console.log("Pipe", pipe(add2, subtract1, multiplyBy5)(4));

/*
    This is a "pointer free" style where you do not see the unary parameter passed between each function    
*/

// with 2 parameter
const divideBy = (divisor, num) => num / divisor;
const pipeResult = pipe(add2, subtract1, multiplyBy5, (x) => divideBy(2, x))(6);

// curry the divide function for a custom unary function
const divide = (divisor) => (num) => num / divisor;
const divideBy2 = divide(2); // partially applied
const pipeResult2 = pipe(add2, subtract1, multiplyBy5, divideBy2)(6);

// console.log(pipeResult, pipeResult2);

// example on string
const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nesciunt odit, error quaerat harum soluta alias neque, perferendis expedita corrupti labore odio iure magni aliquam enim blanditiis recusandae? Voluptates, pariatur unde, doloremque, iusto eius necessitatibus consequatur consectetur omnis dignissimos repudiandae ratione nobis quod beatae ipsum eos. Possimus cupiditate est ipsa. Aliquam sunt praesentium quisquam! Minima, provident numquam! Iusto, expedita? Maiores voluptates ab sequi perferendis possimus adipisci est placeat blanditiis, commodi culpa animi, ipsa illum quo? Quo id laudantium mollitia vel, reiciendis quisquam fuga quaerat cum ipsum sequi! Deleniti architecto aspernatur, aperiam vel quia rem quaerat cupiditate impedit quibusdam totam sed!";

// const wordCount = lorem.split(" ");
// console.log(wordCount.length);

const splitOnSpace = (string) => string.split(" ");
const count = (array) => array.length;

// reusable pipe function
const wordCount = pipe(splitOnSpace, count);
// console.log(wordCount(lorem));

/*------------------------------ basic of pipe and compose Done! -------------------*/

// combine processes - Check for palindrome
const pal1 = "taco cat";
const pal2 = "ufo tofu";
const pal3 = "adam";

const split = (string) => string.split("");
const join = (string) => string.join("");
const lower = (string) => string.toLowerCase();
const reverse = (string) => string.reverse();

const fwd = pipe(splitOnSpace, join, lower);

const rev = pipe(
    fwd, // a nested pipe function
    split,
    reverse,
    join
);
// console.log(fwd(pal1), reverse(split(pal1)));
// console.log(fwd(pal1) === rev(pal1));
// console.log(fwd(pal2) === rev(pal2));
// console.log(fwd(pal3) === rev(pal3));

/* ---------- clone / copy functions within a pipe or compose function -----------*/

console.log("clone/copy with pipe or compose");

// 3 approaches

/*
    1. clone the object before an impure function mutates it
    Positive: Fewer function calls
    negative: Create impure functions and testing difficulties
*/

const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) =>
    Array.isArray(obj) ? [...obj] : typeof obj === "object" ? { ...obj } : obj;

// let array = [1, 2, 3];
// console.log(array === shallowClone(array));

const incrementHome = (obj) => {
    obj.home += 1;
    return obj;
};

const homeScore = pipe(shallowClone, incrementHome);
// console.log(scoreObj, homeScore(scoreObj));

/*
    2) Curry the function to create a partial that is unary
    Positive: Pure function with clear dependencies
    Negative: More calls to the cloning function
*/

let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; // mutation
    return newObj;
};

// Creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHomeB
    //another function
    // and another function etc.
);

console.log(scoreObj, homeScoreB(scoreObj));

/*
    3. Insert the clone function as a dependency
    Positive: Pure function with clear dependencies
    Negative: Non-unary functions in your pipe/compose chain
*/

const incrementHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; // mutation
    return newObj;
};

const homeScoreC = pipe(
    (x) => incrementHomeC(x, shallowClone)
    // another function
    // and another function etc.
);

console.log(scoreObj, homeScoreC(scoreObj));
