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

console.log("function prototype - call");

// bind
// const healPerson1 = person.heal.bind(person1, 10, 20); // bind returns a function
const healPerson1 = person.heal.bind(person1); // bind returns a function
healPerson1(10, 20);
healPerson1(10, 20);
healPerson1(10, 20);

console.log("function call");

// bind
const printFullName = fullName.bind(person1); // bind returns function
printFullName();
const maryHeal = heal.bind(person1, 10, 20); // bind returns function
maryHeal();
