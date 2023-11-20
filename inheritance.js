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

/*
    Any object instances created by a constructor function 
    will inherit the properties of the object at ConstructorFunctionName.prototype.
*/
const samir = new Person("Samir Hossain", 22, "Student");
const kinan = new Person("Kinan Hossain", 29, "Businessman");
console.log(samir, kinan);

// Person.prototype object reference is a descendent of Object.prototype
console.log(Person.prototype);
