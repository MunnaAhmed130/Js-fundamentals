function greet(name) {
  console.log(arguments);
}
greet("john"); // {}

var result = 0;
function addFive(result) {
  return (result += 5);
}

console.log(result); // output 0
console.log(addFive(result)); // output 5
console.log(addFive(10)); // output 15
console.log(result); // output 0
