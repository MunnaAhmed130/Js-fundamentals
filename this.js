// in Browser
"use strict";

// const value = 10;

this.value = 10; // global variable with this
console.log("global", this); // window object
// console.log(value);

// in strict mode this in a function definition is undefined
function context() {
    // "use strict";
    console.log(this);
}

context();

// arrow function will always refer to global object
const func = () => {
    console.log(this);
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

obj.log();
obj.arrow();
obj.job.about();
obj.job.more();
