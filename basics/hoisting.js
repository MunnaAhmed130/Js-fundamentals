console.log(counter); // undefined
var counter = 1;
console.log(counter); // 1

try {
  console.log(number);
} catch (err) {
  console.log(err.name + ":", err.message);
}

//ReferenceError: Cannot access 'counter' before initialization

try {
  console.log(count);
} catch (err) {
  console.log(err.name + ":", err.message);
}

let count = 1;
console.log(count); // 1
