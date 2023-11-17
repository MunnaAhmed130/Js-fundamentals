// in Browser
"use strict";

// const value = 10;

this.value = 10; // global variable with this
console.log(this); // window object
console.log(value);

// in strict mode this in a function is undefined
function context() {
    "use strict";
    console.log(this);
}

context();

const func = () => {
    console.log(this); // window object
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
            console.log(
                "He is a",
                this.designation,
                "with a salary of " + this.salary
            );
        },
    },
    log: function () {
        console.log(this);
    },
};

obj.log();
// obj.job.about();
