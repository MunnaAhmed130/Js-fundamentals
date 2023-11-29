// adding large numbers
let maxSafeInteger = Number.MAX_SAFE_INTEGER;

// Adding 1 to the maximum safe integer
let result = maxSafeInteger + 1;

console.log(result); // Outputs: 9007199254740992
console.log("result is equal to maxSafeInt + 1", result === maxSafeInteger + 1); // Outputs: true (no error)
console.log("result is equal to maxSafeInt + 2", result === maxSafeInteger + 2); // Outputs: false (unexpected behavior)

// substracting close numbers
let x = 0.1;
let y = 0.2;
result = x + y;

console.log(`${x} + ${y} =`, result); // Outputs: 0.30000000000000004
console.log(result === 0.3); // Outputs: false

// dividing by zero:
result = 1 / 0;

console.log(result); // Outputs: Infinity
