// "use strict";
// var getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

/*
 Encapsulation -
 Data can be grouped together with functionality that operates on that data.
*/

const person = {
  firstName: "John",
  lastName: "doe",
  // symbol as key
  [sym]: "my key",
  health: 100,
  email: "johndoe@gmail.com",
  lang: {
    eng: {
      proficiency: "70%",
    },
  },
  // object method
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  heal: function (num1, num2) {
    this.health += num1 + num2;
    console.log(this);
  },
  // ES6
  login() {
    // console.log(this.email);
    return this.email;
  },
};

// adding

// prevent adding properties to object
// Object.preventExtensions(person);

let key = "date of birth";
// person.key = 1999; // does not work with variables
person[key] = 1999;

// dot/bracket notation to add property
person.job = "archer";
// person[job] = "archer";  // error
person["job"] = "medic";

// get object's property descriptor
// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// check if object has this property
// console.log(person.hasOwnProperty("heal"));

// console.log(person);

// dot/bracket notation to access property
// console.log(person["email"], person.health);

// why use bracket notation
// for dynamic access / passing a variable
// dynamic access / dynamic dispatch
for (let key in person) {
  // console.log(person[key]);
}

// object destructuring
const {
  firstName: name, // destructure firstname as name
  lastName,
  health,
  email,
  job,
  lang: {
    eng: { proficiency },
    ban = {}, // default value while destructuring
  },
  ...rest
} = person;
// console.log(firstName, lastName, health, email, job);
// console.log(proficiency, ban, name);
// rest.fullName = "Ahmed";
// console.log(rest);
// console.log(person[sym]);
// console.log(person);
// console.log(person.fullName());

// optional chaining
// console.log(person.lang.eng?.proficiency);
