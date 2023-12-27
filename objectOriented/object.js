// "use strict";
// var getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

// constructors make singleton
// Obeject.create()

// object literals
const user = {};

const sym = Symbol("key");

// encapsulation data/ organizing code
// with object literals
const person = {
    // key: value // keys are always string
    firstName: "John",
    lastName: "doe",
    // symbol as key
    [sym]: "my key",
    health: 100,
    email: "johndoe@gmail.com",
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

// prevent adding properties to object
// Object.preventExtensions(person);

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
console.log(person["email"], person.health);

// why use bracket notation
// for dynamic access / passing a variable
// dynamic access / dynamic dispatch
for (let key in person) {
    // console.log(person[key]);
}

// object destructuring
const { firstName, lastName, health, email, job, ...rest } = person;
// console.log(firstName, lastName, health, email, job);
// rest.fullName = "Ahmed";
console.log(rest);
console.log(person[sym]);
// console.log(person.fullName());
