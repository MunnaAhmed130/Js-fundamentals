const person = {
    firstName: "John",
    lastName: "Doe",
    // this is a function
    name: function () {
        return this.firstName + " " + this.lastName;
    },
    // both below are accessors
    // this is property
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    // setter can only have one parameter
    set last(last) {
        this.lastName = last;
    },
};

// console.log(person.fullName);
person.last = "smith"; // use setter like property
console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
// console.log(person.name());

// Define object
const obj = { counter: 0 };

const obj2 = {
    counter: 0,
    get reset() {
        this.counter = 0;
    },
};

console.log(Object.getOwnPropertyDescriptor(obj2, "reset"));

console.log(obj2);
// Define setters and getters
Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    },
});

Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    },
});

Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    },
});

Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    },
});

Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    },
});
console.log(Object.getOwnPropertyDescriptor(obj, "reset"));

console.log(obj);
