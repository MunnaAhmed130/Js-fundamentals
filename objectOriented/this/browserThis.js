// in Browser
// "use strict";

// const value = 10;
// num = 1;
// console.log(this.num); // 1

// set global variable with this  / add property
this.value = 10;

// brower returns window object because it is global scoped
console.log("window", this === window, this);

this.value = 1; // modify property
console.log(this.value); // access property

delete this.value; // removing property

// refers to window object in browser
let ob = { name: "", log: this };
console.log(ob);

// -------------------------------- function declaration and this

function context() {
  // in non-strict mode brower returns window object
  // in strict mode browser returns undefined
  console.log("function context", this); // undefined
  console.log(this === window);
  return this;
}

console.log(context());

// ------------------------ function expresstion and this

const funcExp = function () {
  // in non-strict mode browser returns global object - window
  // in strict mode browser returns undefined
  console.log("function expression", this);
  console.log(this === window);
  console.log(this === globalThis);
  return this;
};

console.log(funcExp());

// -------------------------------- arrow function and this

// arrow function will always refer to global object
// they don't have their own 'this' binding
// this is lexically inherited from the surrounding context and doesn't change
const func = () => {
  // brower returns window object
  console.log("Arrow function context", this);
  console.log(this === window);
};

func();

function anotherFunc() {
  console.log("Parnt function", this);
  const parentThis = this;
  return () => {
    // this arrow func gets this from its parent function
    const childThis = this;
    console.log("lexically found", this);
    console.log(parentThis === childThis);
  };
}

anotherFunc()();

// --------------------------------- this in object

// in object method this refers to the object
var obj = {
  firstName: "John",
  lastName: "smith",
  job: {
    salary: 5000,
    designation: "officer",
    about: function () {
      console.log("about function", this);
      console.log(this === obj.job);
      let designation = this.designation;
      let salary = this.salary;
      // console.log(`He is a ${designation} with a salary of ${salary}`);
      return () => {
        // this arrow func gets lexical this from it's parent scope
        console.log("arrow function returnded by about function", this);
        console.log(this === obj.job);
      };
    },

    // arrow function will always refer to global object
    more: () => {
      console.log("more arrow function", this);
      console.log(this === window);
    },
  },

  log: function () {
    console.log("log function", this);
    console.log(this === obj);
  },

  // arrow function will always refer to global object
  arrow: () => {
    console.log("arrow function", this);
    console.log(this === window);
  },
};

obj.log();
obj.arrow();
obj.job.about()();

// in node return module.exports object, browser returns window object
obj.job.more();

// ----------------------------- reusing function on objects with this

function sayNameForAll() {
  console.log(this.name);
}

let person1 = {
  name: "Nicholas",
  sayName: sayNameForAll,
};

let person2 = {
  name: "Greg",
  sayName: sayNameForAll,
};

// When a function is called as a property of an object
// the value of this changes to the object it was called
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

// ----------------------  non-strict mode code

// variables declared with var keywords are global variable
// and are considered a property of the global object
// var name = "Michael";
// sayNameForAll(); // outputs "Michael" // has access to global object
