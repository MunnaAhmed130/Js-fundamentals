// function is defined here
function fullName() {
  return this.firstName + " " + this.lastName;
}

let person = {
  firstName: "John",
  lastName: "doe",
  health: 100,
  // but used/attached as object method here
  // value of this changes
  fullName,
  heal: function (num1, num2) {
    this.health += num1 + num2;
    return this;
  },
  getThis: this,
  return: function () {
    console.log(this);
    return {
      // in this object, returned by method,
      // the value of this is lexically found value from the method
      getThis: this,
    };
  },
};

console.log(person.return());

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
console.log(person.fullName());
console.log(fullName.call(person1));

console.log(person.heal(10, 20));
console.log(person1.heal(10, 30));

// -------------------------------------------------------------------

// `this` does not point to the function itself or its lexical scope (with one exception for arrow functions).
function greet() {
  // "use strict";
  let parentThis = this;
  // console.log(this);
  return function () {
    // console.log(this);
    let childThis = this;
    console.log(parentThis, childThis);
    return parentThis === childThis;
  };
}
console.log(greet()());

// ---------------------------------------------------------------

const obj1 = {
  name: "obj1",
  getThis: function () {
    return this;
  },
};

const obj2 = {
  // __proto__: obj1,
  __proto__: null,
  name: "obj2",
};

console.log(obj1.name, obj1.__proto__);
console.log(obj2.name, obj2.__proto__);

// -------------------------------------------------------------------

function logThis() {
  // "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined

// -------------------------------------------------------------------
