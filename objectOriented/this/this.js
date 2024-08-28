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
    let self = this;
    console.log(this);
    // function declaration inside a object method returns window object
    function greet() {
      console.log(this, self);
    }
    greet();
    // function declaration also returns the window object
    (function () {
      console.log(this, self);
    })();

    // arrow function returns this received from closures
    (() => console.log(this, self))();

    return {
      // in this object, returned by method,
      // the value of this is lexically found value from the method
      getThis: this,
    };
  },
};

console.log(person.return());
// console.log(person.sayHealth());

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

// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// console.log(person1.sayHealth());
// // method invoke
// console.log(person.fullName());
// console.log(fullName.call(person1));
// console.log(person.heal(10, 20));
// console.log(person1.heal(10, 30));
// console.log(person1.sayHealth());

// -------------------------------------------------------------------

// this example only talks about behaviour in a GEC to learn about behaviour inside a object see above example
// `this` does not point to the function itself or its lexical scope (with one exception for arrow functions).
// in a closure or FEC, the inner functions get the value of `this` lexically
function greet() {
  // "use strict";
  let parentThis = this;
  function hello() {
    "use strict";
    console.log("hello", this);
  }
  hello();
  console.log("greet", this);
  return function () {
    // console.log(this);

    let childThis = this;
    console.log("arrow this", parentThis, childThis);
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

var vehicle = {
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

// node => error, run in the browser
console.log(vehicle.fullName.call(this));
console.log(vehicle.fullName.bind(this)());

console.log(vehicle.fullName());
// ---------------------------------------------------

var vehicle = {
  cars: [
    { make: "Lamborghini", model: "Huracán" },
    { make: "Mclaren", model: "720s" },
    { make: "Ferrari", model: "Italia" },
  ],
  brand: "lamborghini",

  fullName: function () {
    let self = this;
    console.log(this);
    // A variable inside a function cannot access variables and properties outside its scope so the value of this would be the same inside the inner functions as the outer function called fullName
    // each function gets access to the 'this' value from fullName through closures
    this.cars.forEach(function () {
      console.log(self, car);
    });

    // this.cars.forEach((self) => {
    //   console.log(self.make + " " + self.model);
    // });

    this.cars.forEach((car) => {
      console.log(car.make + " " + car.model + " " + this.brand);
    });
  },
};

vehicle.fullName();
