// "use strict";
// var getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

// encapsulation data/ organizing code
// with object literals
const person = {
    firstName: "John",
    lastName: "doe",
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
person["job"] = "medic";

// get object's property descriptor
// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// check if object has this property
// console.log(person.hasOwnProperty("heal"));

console.log(person);

// dot/bracket notation to access property
console.log(person["email"], person.health);

// why use bracket notation
// for dynamic access / passing a variable
for (let key in person) {
    console.log(person[key]);
}
