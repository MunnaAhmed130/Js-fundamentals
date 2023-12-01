function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

// Person instances will inherite this prototype - prototypal inheritance
Person.prototype.ageString = function () {
    console.log(this.name, "is", this.age, "years old");
};

/*  Teacher has the same properties as person plus more

function Teacher(name, age, job, subject){
    this.name = name;
    this.age = age;
    this.job = job;
    this.subject = subject;
}

*/

function Teacher(name, age, job, subject) {
    Person.call(this, name, age, job); // constructor inheritance
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

const samir = new Person("Samir Hossain", 22, "Student");
const kinan = new Person("Kinan Hossain", 29, "Businessman");

const dave = new Teacher("Dave Gray", 34, "Teacher", "English");

console.log(samir, kinan, dave);
