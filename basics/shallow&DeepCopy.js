// Foundation knowledge for writing pure functions

// Js Data Types

// Primitive vs Structural

/*
Primitive: 
    1. undefined
    2. Boolean
    3. Number
    4. String
    5. BigInt
    6. Symbol
*/

/*
Structural:
    1. Object: (new) Object, Array, Map, Set, WeakMap, Date
    2. Function
 */

// Value vs Reference
// Primitives pass values

let x = 2;
let y = x;
y++;
// console.log(x, y);

// Structural types pass references:
let array = [1, 2, 3];
let arrayRef = array;
arrayRef.push(4);
// console.log(array);

// Mutable vs Immutable
// Primitives are immutable
let myName = "Dave";
myName[0] = "W"; // doesn't work
// console.log(myName);

// Reassignment is not the same as mutable
myName = "David";
// console.log(myName);

// Structures contain mutable data
arrayRef[0] = 0;
// console.log(array, arrayRef, array == arrayRef); // true

// Pure Functions require you to avoid
// Mutating the data

// Impure function that mutates the data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
};

// const does not make the array immutable but stops reassigning
const score = [10, 44, 50];
// this mutates the original array & is considered to be a side-effect
addToScoreHistory(score, 40);
// console.log(score);

// Pure functions don't mutate the data
// so modify the function so it does not mutate the original data

// shallow copy vs Deep copy(clones)

// shallow copy
// with the spread operator
const arrayRef2 = [...arrayRef];

// with Object.assign()
const arrayRef3 = Object.assign([], arrayRef);
console.log(array, arrayRef, arrayRef2, arrayRef3);
console.log(arrayRef == array);
console.log(arrayRef === arrayRef2, array === arrayRef2);
console.log(arrayRef === arrayRef3, array === arrayRef3);

// for the nested arrays or objects
// shallow copies still shares references for nested reference data types

arrayRef.push([5, 6, 7, 8]);
const nestedArrayRef = [...arrayRef];
nestedArrayRef[4].push(9);
console.log(nestedArrayRef, arrayRef);

// console.log(array, arrayRef, arrayRef2, arrayRef3);

// Deep copy is needed to avoid this
// Deep copies share no references
// Several libraries like lodash, Ramda and other have this feature built-in

/*

    Here is a one line vanilla js solution
    But it does not work with Dates, functions, undefined, Infinity, RegExps, Maps, sets, Blobs, FileLists, ImageDatas, and other complex data types

*/

const newScore = JSON.parse(JSON.stringify(score));
console.log(newScore, score === newScore);

// Instead of using a library, here is a vanilla JS function

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;
    // create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const value = obj[key];
        // recursive call for nested objects & arrays
        newObject[key] = deepClone(value);
    }
    return newObject;
};

const arrayDeepCloned = deepClone(arrayRef);
arrayDeepCloned[4].push(10);
console.log(arrayDeepCloned, arrayRef);
console.log(arrayDeepCloned === arrayRef);

// Now we can make a pure function

const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
};

const immutableScore = pureAddToScoreHistory(score, 10, deepClone);
console.log(immutableScore === score);
