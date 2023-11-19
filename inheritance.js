/* this constructor copies methods for every object created
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.ageString = function () {
        console.log(this.name, "is", this.age, "years old");
    };
}
*/

// prototype based inheritence
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.ageString = function () {
    console.log(this.name, "is", this.age, "years old");
};

const samir = new Person("Samir Hossain", 22, "Student");
const kinan = new Person("Kinan Hossain", 29, "Businessman");
console.log(samir, kinan);
console.log(Person.prototype);
