// in Browser
// "use strict";

// const value = 10;
var num = 1;
// console.log(this.num); // 1

// set global variable with this  / add property
this.value = 10;

// brower returns window object because it is global scoped
console.log("window", this === window, this.value, this);

this.value = 1; // modify property
// console.log(this.value); // access property

delete this.value; // removing property
// console.log(this.value);

// this = ""; // syntaxError - cannot mutate the value of this

// in a object, refers to window object in browser
let ob = { name: "", log: this };
// console.log(ob);

// -------------------------------- function declaration and this

function context() {
  "use strict";
  // in non-strict mode brower returns window object
  // in strict mode browser returns undefined
  console.log("function context", this === window, this); // undefined

  (function greet() {
    console.log("inner func of context returns", this === window, this);
  })();

  (function () {
    console.log(
      "inner anonymous func of context returns",
      this === window,
      this
    );
  })();

  (() => {
    console.log("arrow func of context returns", this);
  })();

  return this;
}

console.log(context());

// Functions(declaration) and variables(declared with var) in the `GEC` get attached to GEC
// as methods and properties to the `window` object.
// console.log(window.context());
// console.log(window.num);

// ------------------------ function expresstion and this

const funcExp = function () {
  "use strict";
  // in non-strict mode browser returns global object - window
  // in strict mode browser returns undefined
  console.log(
    "function expression returns",
    window === globalThis,
    this === window,
    this
  );

  (function greet() {
    console.log("inner func of funcExp returns", this === window, this);
  })();

  (function () {
    console.log(
      "inner anonymous func of funcExp returns",
      this === window,
      this
    );
  })();

  (() => {
    console.log("arrow func of funcExp returns", this === window, this);
  })();

  return this;
};

console.log(funcExp());

// -------------------------------- arrow function and this

// arrow function will always refer to global object
// they don't have their own 'this' binding
// this is lexically inherited from the surrounding context and doesn't change
const func = () => {
  "use strict";
  // brower returns window object
  console.log("Arrow func returns", this === window, this);

  (function greet() {
    console.log("inner func of func returns", this === window, this);
  })();

  (function () {
    console.log("inner anonymous func of func returns", this === window, this);
  })();

  (() => {
    console.log("inner arrow func of func returns", this);
  })();
};

func();

// outer function both returns undefined
function anotherFunc() {
  "use strict";
  console.log("Parent function", this);
  const parentThis = this;
  return () => {
    // arrow func always get `this` from its parent function
    // so this also returns undefined
    const childThis = this;
    console.log("lexically found", parentThis === childThis, this);
  };
}

anotherFunc()();

// here windowFunc has access to window as 'this'
// outer function gets window
let windowFunc = window.anotherFunc();
// inner function also gets window
windowFunc();

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

var name = "Michael";

// When a function is called as a property of an object
// the value of this changes to the object it was called
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

window.sayNameForAll(); // outputs "Michael" // has access to global object

// ----------------------  non-strict mode code

// variables declared with var keywords are global variable
// and are considered a property of the global object
// var name = "Michael";
// sayNameForAll(); // outputs "Michael" // has access to global object

// --------------------------------- this in object

console.log("this with object");
// in object method this refers to the object
var obj = {
  firstName: "John",
  lastName: "smith",
  job: {
    salary: 5000,
    designation: "officer",
    about: function () {
      console.log("about method", this === obj.job, this);
      // let designation = this.designation;
      // let salary = this.salary;
      // console.log(`He is a ${designation} with a salary of ${salary}`);

      (function greet() {
        console.log(
          "inner func of about method returns",
          this === window,
          this
        );
      })();

      (function () {
        console.log(
          "inner anonymous func of about method returns",
          this === window,
          this
        );
      })();

      (() => {
        console.log(
          "arrow func of about method returns",
          this === obj.job,
          this
        );
      })();

      return () => {
        // this arrow func gets lexical this from it's parent scope
        console.log(
          "arrow func returnded by about method",
          this === obj.job,
          this
        );
      };
    },

    // arrow function will always refer to global object
    more: () => {
      console.log("more arrow method returns", this === window, this);

      (function greet() {
        console.log("inner func of method returns", this === window, this);
      })();

      (function () {
        console.log(
          "inner anonymous func of method returns",
          this === window,
          this
        );
      })();

      (() => {
        console.log("arrow func of method returns", this === window, this);
      })();
    },
  },

  log: function () {
    console.log("log function", this === obj, this);

    (function greet() {
      console.log("inner func of method returns", this === window, this);
    })();

    (function () {
      console.log(
        "inner anonymous func of method returns",
        this === window,
        this
      );
    })();

    (() => {
      console.log("arrow func of method returns", this === obj, this);
    })();

    return function () {
      console.log(
        "anonymous function returned by method returns",
        this === window,
        this
      );
    };
  },

  // arrow function will always refer to global object
  arrow: () => {
    console.log("arrow function", this === window, this);
  },
};

obj.job.about()();

// in node return module.exports object, browser returns window object
obj.job.more();

obj.log()();
obj.arrow();
