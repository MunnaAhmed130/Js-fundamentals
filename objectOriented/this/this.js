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

  // using below function on another object will only output result for person object
  // because it is statically attached to person object
  // try changing to `this` and the value will dynamically change
  sayHealth: function () {
    // return this.health;
    return person.health;
  },

  // getThis: this,

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
console.log(person.sayHealth());

const person1 = {
  firstName: "Mary",
  lastName: "doe",
  health: 50,

  // but will be called through this object
  // and the value of this
  heal: person.heal,

  // should not call function as a value to a property
  // reason is that you lose the ability to call it later and the value becomes static
  // sayHealth: person.sayHealth(),

  sayHealth: person.sayHealth,
};

console.log(person1.sayHealth());
// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// method invoke
console.log(person.fullName());
console.log(fullName.call(person1));

console.log(person.heal(10, 20));
console.log(person1.heal(10, 30));

console.log(person1.sayHealth());
// -------------------------------------------------------------------

// `this` does not point to the function itself or its lexical scope (with one exception for arrow functions).
// in a closure or FEC, the inner functions get the value of `this` lexically
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

// this for accuracy
let car = {
  make: "Lamborghini",
  made: "Huracan",
  fullName: function () {
    // console.log(`${car.make} ${car.made}`);
    // the result as above but we don't have to know the object name
    // console.log(`${this.make} ${this.made}`);
    return `${car.make} ${car.made} - ${this.make} ${this.made}`;
  },
};

let anotherCar = {
  make: "Lamborghini",
  made: "Gallardo",
};

anotherCar.fullName = car.fullName;

console.log(car.fullName());
console.log(anotherCar.fullName());

console.log(car.fullName.call(anotherCar));

// ----------------------------------------------------------------------

var cars = [
  { make: "Mclaren", made: "720s" },
  { make: "Ferrari", made: "Italia" },
];

let vehicle = {
  cars: [
    {
      make: "Lamborghini",
      made: "Huracan",
    },
  ],

  fullName: function () {
    let { make, made } = this.cars[0];
    // console.log(make, made);
    // return `${this.cars[0].make} ${this.cars[0].made} `;
    return `${make} ${made}`;
  },
};

console.log(vehicle.fullName());

// node => error, run in the browser
console.log(vehicle.fullName.call(this));

// ---------------------------------------------------
