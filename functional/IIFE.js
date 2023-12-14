/*
    IIFE - Immediately Invoked Function Expression
    Pronounced "Iffy" by Ben Alman who introduced the acronym
*/

// Variations:
// with anonymous arro function inside
(() => {
    // do stuff
})();

// with function keyword

(function () {
    // do stuff
})();

//  variables declared inside IIFE are private to that IIFE.

// with a function name(allows for recursion)
(function myIIFE(num) {
    num++;
    console.log(num);
    // return num !== 5 ? myIIFE(num) : console.log("finished!");
})((num = 0));

let result = (function () {
    return "From IIFE!";
})();

// Reason
// 1) Does not pollute the global Object namespace

// global
const x = "";
const helloWorld = () => "Hello World!";

// isolate declarations within the function
(() => {
    const x = "iife says";
    const helloWorld = () => "Hello IIFE";
    // console.log(x, helloWorld());
})();

// console.log(x, helloWorld());

// 2. Private variables and methods from closure
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`You have ${num} credit.`);
    return () => {
        ++counter;
        credits(counter);
    };
})();

// increment();
// increment();

// credits(2); // RefError

// 3. The Module Pattern

const Score = (() => {
    let count = 0;
    return {
        current: () => count,
        increment: () => ++count,
        reset: () => {
            count = 0;
        },
    };
})();

Score.increment();
Score.increment();
Score.increment();
Score.reset();
// console.log("score", Score.current());

// The Revealing Pattern is a variation of the Module pattern
const Game = (() => {
    let count = 0;
    const current = () => {
        return `Game score is ${count}.`;
    };
    const increment = () => {
        ++count;
    };
    const reset = () => {
        count = 0;
    };
    return {
        current: current,
        increment: increment,
        reset: reset,
    };
})();

Game.increment();
console.log(Game.current());

// Injection a nameSpace object
// ((namespace) => {
//     namespace.count = 0;
//     namespace.current = function () {
//         return `App count is ${this.count}`;
//     };
//     namespace.increment = function () {
//         ++this.count;
//     };
//     namespace.reset = function () {
//         this.count = 0;
//     };
// })((window.App = window.App || {}));

// App.increment();
// console.log(App.current());
