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

// cannot change constructor later
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    // this method is copied for every object created
    this.ageString = function () {
        console.log(this.name, "is", this.age, "years old");
    };
}

const samir = new Person("Samir Hossain", 22, "Student");
const kinan = new Person("Kinan Hossain", 29, "Businessman");
console.log(samir, kinan);

// both give the same output
console.dir(samir.__proto__);
console.dir(Object.getPrototypeOf(samir));
