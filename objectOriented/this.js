// in Browser
"use strict";

const value = 10;
// num = 1;

// this.value = 10; // set global variable with this

// in node returns empty objects, brower returns window object
console.log("global", this);

console.log(this.value); // undefined
// console.log(this.num); // 1

function context() {
    // in node returns global objects, brower returns window object
    // "use strict";
    // in strict mode node & browser returns undefined
    console.log("function context", this); // undefined
}

context();

// arrow function will always refer to global object
const func = () => {
    // in node returns empty objects, brower returns window object
    console.log("Arrow function context", this); //
};

func();

// in object method this refers to the object
var obj = {
    firstName: "John",
    lastName: "smith",
    job: {
        salary: 5000,
        designation: "officer",
        about: function () {
            console.log(this);
            console.log(
                "He is a",
                this.designation,
                "with a salary of " + this.salary
            );
            return () => {
                // this arrow func gets lexical this from it's parent scope
                console.log("arrow", this);
            };
        },
        // arrow function will always refer to global object
        more: () => {
            console.log(this);
        },
    },
    log: function () {
        console.log(this);
    },
    // arrow function will always refer to global object
    arrow: () => {
        console.log(this);
    },
};

// obj.log();
// obj.arrow();
obj.job.about()();
obj.job.more(); // in node return empty object, browser returns window object
