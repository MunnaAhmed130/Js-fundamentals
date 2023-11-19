function greet(name) {
    console.log(arguments);
}

greet("john"); // {}
console.log(greet.prototype);
console.dir(greet());

// arrow functions don't have arguments property
const greet2 = (greetings) => {
    // uncaught referenceError: arguments is not defined
    // console.log(arguments);
};

greet2("Hello");
console.log(greet2.prototype); // arrow function don't have any prototype

var result = 0;
function addFive(result) {
    return (result += 5);
}

console.log(result); // output 0
console.log(addFive(result)); // output 5
console.log(addFive(10)); // output 15
console.log(result); // output 0
