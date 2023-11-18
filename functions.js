function greet(name) {
    console.log(arguments);
}
greet("john"); // {}

// arrow functions don't have arguments property
const greet2 = (greetings) => {
    // uncaught referenceError: arguments is not defined
    console.log(arguments);
};

greet2("Hello");

var result = 0;
function addFive(result) {
    return (result += 5);
}

console.log(result); // output 0
console.log(addFive(result)); // output 5
console.log(addFive(10)); // output 15
console.log(result); // output 0
