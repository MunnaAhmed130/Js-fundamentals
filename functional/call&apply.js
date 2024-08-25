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

// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));
// console.log("function prototype - call");

// both these methods allow you to explicitly set this to a specific object

// call
// Typically used when you know the exact number of arguments and can pass them individually.
console.log(fullName.call(person));
console.log(heal.call(person, 10, 20));
console.log(heal.call(person, 10, 20));
console.log(heal.call(person, 10, 20));

// apply
// Convenient when the arguments are already in an array or array-like object
console.log(fullName.apply(person1));
console.log(heal.apply(person1, [10, 20]));
console.log(heal.apply(person1, [10, 20]));
console.log(heal.apply(person1, [10, 20]));
