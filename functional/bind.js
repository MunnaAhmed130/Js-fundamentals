function fullName() {
  return this.firstName + " " + this.lastName;
}

function heal(num1, num2) {
  this.health += num1 + num2;
  return this;
}

const person = {
  firstName: "Mary",
  lastName: "doe",
  health: 50,
};

const person1 = {
  firstName: "John",
  lastName: "doe",
  health: 58,
};

// bind creates and returns a new function
// with 'this' bound to specific object
// which can be ivoked later

// bind
const healPerson = heal.bind(person); // bind returns a function
console.log(healPerson(10, 20));
console.log(healPerson(10, 20));
console.log(healPerson(10, 20));

// bind
const printFullName = fullName.bind(person); // bind returns function
printFullName();

const healPerson1 = heal.bind(person1, 10, 20); // bind returns function
console.log(healPerson1());
console.log(healPerson1());
console.log(healPerson1());
