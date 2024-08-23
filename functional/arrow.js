// ------------------- arrow function
// arrow functions don't have arguments property

const sum = (num1, num2) => num1 + num2; // implicit return doesn't require a `return`
console.log("sum", sum(4, 3, 3));

// console.log(greet2("Hello", "World")); // behaves like a variable not a function

// for than one line inside the code block encapsulate it by the pair of { }
// we would need to use the “return” keyword
const greet2 = (user = "user") => {
  // console.log(arguments); // uncaught referenceError: arguments is not defined
  return `Hello ${user}`;
};

console.log(greet2("Hello", "World")); //
console.log(greet2.prototype); // arrow function don't have any prototype

// when returning object encapsulate the code block with parenthesis
const user = (name) => ({
  username: name,
});

console.log("user", user("Adam"));

// =============================== Returning an arrow function

const person = {
  name: "adam",

  // this method returns an arrow function
  sayName() {
    console.log(this.name);
    return () => console.log(this);
  },

  sayName2: () => console.log(this.name),
};

person.sayName()();
person.sayName2();

const greet = function () {
  console.log("first", this.global);
  return () => console.log(this);
};

greet()();
