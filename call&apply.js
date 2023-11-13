function fullName() {
    console.log("fullName", this.firstName + " " + this.lastName);
}

function heal(num1, num2) {
    this.health += num1 + num2;
    console.log("Health", this);
}

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

const person1 = {
    firstName: "Mary",
    lastName: "doe",
    health: 50,
};

// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

console.log("function prototype - call");

// method invoke
person.fullName();
person.heal(10, 20);

// call
person.fullName.call(person1); // using method of person for person1
person.heal.call(person1, 10, 20);

// apply
person.fullName.apply(person1);
person.heal.apply(person1, [10, 20]);

console.log("function call");

// call
fullName.call(person1);
heal.call(person1, 10, 20);

// apply
fullName.apply(person1);
heal.apply(person1, [10, 20]);
