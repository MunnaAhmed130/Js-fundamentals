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

console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

const object = Object.defineProperty({}, "property1", {
    value: 1,
    writable: true, // values can be changed
    enumerable: false, // can be enumerated
    configurable: true, // can be deleted
});

// object.prop2 = 5;
// object.property1 = 5;
console.log(object.property1);
