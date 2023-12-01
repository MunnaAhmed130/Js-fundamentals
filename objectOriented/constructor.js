/*  object with same properties
let samir = {
    name: "Samir Hossain",
    age: 22,
    job: "Student"
}

let kinan = {
    name: "Kinan Hossain",
    age: 29,
    job: "Businessman"
}
*/

// cannot modify constructor's later
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    // this method is copied for every object created
    // this.ageString = function () {
    //     console.log(this.name, "is", this.age, "years old");
    // };
}

// Person has a prototype property
console.log(Person.hasOwnProperty("prototype"));

Person.prototype.ageString = function () {
    console.log(this.name, "is", this.age, "years old");
};

Object.setPrototypeOf(Person, null);

/*
    Any object instances created by a constructor function 
    will inherit the properties of the object at ConstructorFunctionName.prototype.
    prototype based inheritence
*/
const samir = new Person("Samir Hossain", 22, "Student");
const kinan = new Person("Kinan Hossain", 29, "Businessman");
console.log(samir, kinan);

// both give the same output
console.dir(samir.__proto__);
console.dir(Object.getPrototypeOf(samir));

// Person.prototype object reference is a descendent of Object.prototype
console.log(Person.prototype);
