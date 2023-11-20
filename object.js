// "use strict";
// var getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

const person = {
    firstName: "John",
    lastName: "doe",
    health: 100,
    // object method
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
    heal: function (num1, num2) {
        this.health += num1 + num2;
        console.log(this);
    },
};

Object.preventExtensions(person);
person.job = "archer";
// get object's property descriptor
// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// check if object has this property
// console.log(person.hasOwnProperty("heal"));

console.log(person);

const object = Object.defineProperty({}, "property1", {
    value: 1,
    // meta data
    writable: true, // values can be changed
    enumerable: false, // can be enumerated
    configurable: true, // can be deleted
});

// property descriptors are undefined and false if they are not specified
Object.defineProperty(object, "property2", {
    // value: 1,
});

object.property3 = 5;
// object.property1 = 5;
console.log(object);

/* 
all objects inherits property from Object.prototype
almost all objects are descendants of Object.prototype
therefore have access to its properties and methods
*/
console.log(Object.prototype);

console.log(Object.getOwnPropertyDescriptor(object, `property1`));
console.log(Object.getOwnPropertyDescriptor(object, `property2`));
console.log(Object.getOwnPropertyDescriptor(object, `property3`));
