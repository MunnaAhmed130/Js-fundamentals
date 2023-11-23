"use strict";

let collection = {
    string: "john",
    number: 1,
    nan: NaN,
    boolean: true,
    func: function () {},
    null: null,
    array: [1, 2],
    unDefined: undefined,
    object: { name: "john" },
    bigInt: 20000n,
    symbol: Symbol(),
};

for (let x in collection) {
    console.log(x + " has type of " + typeof collection[x]);
    // console.log(typeof collection.x, x);
}

// code readability should be high
// alert("");  // browser code
