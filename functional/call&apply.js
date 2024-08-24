function fullName() {
  console.log("fullName", this.firstName + " " + this.lastName);
}

function heal(num1, num2) {
  this.health += num1 + num2;
  console.log("Health", this);
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

// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));
// console.log("function prototype - call");

// call
// Typically used when you know the exact number of arguments and can pass them individually.
fullName.call(person);
heal.call(person, 10, 20);

// apply
// Convenient when the arguments are already in an array or array-like object
fullName.apply(person1);
heal.apply(person1, [10, 20]);
