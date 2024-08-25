const person = {
  firstName: "John",
  lastName: "doe",
  health: 100,
  // object method
  // this method is defined here
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  heal: function (num1, num2) {
    this.health += num1 + num2;
    console.log(this);
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "doe",
  health: 50,
  // but will be called through this object
  // and the value of this
  heal: person.heal,
};

// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// method invoke
person.fullName();
person.heal(10, 20);

person1.heal(10, 30);

// -------------------------------------------------------------------

// `this` does not point to the function itself or its lexical scope (with one exception for arrow functions).
function greet() {
  // "use strict";
  console.log(this);
  return function () {
    console.log(this);
  };
}

greet()();

// ---------------------------------------------------------------
