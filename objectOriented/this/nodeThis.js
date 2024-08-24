"use strict";

// const value = 10;
// num = 1;

this.value = 10; // set global variable with this

// in node the default calling object is `module.exports`
// so at the top level of node.js module `this` refers to `module.exports`
console.log("this is module", this === module.exports);

this.value = 1;
console.log(this.value); // undefined
// console.log(this.num); // 1

// delete this.value; // removing property

// this refers to module.exports object in node
let ob = { name: "", log: this };
console.log(ob);

console.log(globalThis);

// -------------------------------- function declaration and this

function context() {
  // in non-strict mode node returns global objects
  // in strict mode node & browser returns undefined
  console.log("function context", this); // undefined
  console.log(this === global);
  return this;
}

console.log(context());

// ------------------------ function expresstion and this

const funcExp = function () {
  // in non-strict mode node returns global objects
  // in strict mode node & browser returns undefined
  console.log("function context", this); // global object
  console.log(this === global);
  console.log(this === globalThis);
  return this;
};

console.log(funcExp());

// -------------------------------- arrow function and this

// arrow function will always refer to global object
// they don't have their own 'this' binding
// this is lexically inherited from the surrounding context and doesn't change
const func = () => {
  // node returns  module.export object
  console.log("Arrow function context", this); //
  console.log(this === module.exports);
  return this;
};

func();

function anotherFunc() {
  console.log(this);
  const parentThis = this;
  return () => {
    // this arrow func gets this from its parent function
    const childThis = this;
    console.log(this);
    console.log(parentThis === childThis);
  };
}

anotherFunc()();

function testFunc() {
  console.log(this);
  return func;
}

console.log(testFunc()());

// --------------------------------- this in object

// in object method this refers to the object
var obj = {
  firstName: "John",
  lastName: "smith",
  job: {
    salary: 5000,
    designation: "officer",
    about: function () {
      // in a method, this refers to the object, the function is method of
      console.log(this);
      console.log(this === obj.job);
      let designation = this.designation;
      let salary = this.salary;
      // console.log(`He is a ${designation} with a salary of ${salary}`);
      return () => {
        // this arrow func gets lexical this from it's parent scope
        // in here from the parent function
        console.log("arrow", this);
        console.log(this === obj.job);
      };
    },
    // arrow function will always refer to the top level scope object
    more: () => {
      console.log(this);
      console.log(this === module.exports);
    },
  },
  log: function () {
    console.log(this);
    console.log(this === obj);
  },
  // arrow function will always refer to global object
  arrow: () => {
    console.log(this);
    console.log(this === module.exports);
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

person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

// non-strict mode code
// variables declared with var keywords are global variable
// and are considered a property of the global object
// var name = "Michael";
// sayNameForAll(); // outputs "Michael" // has access to global object
