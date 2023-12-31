let counter = 1;
// stores the updated value & doesn't return the updated value
// assign first increment later
console.log(counter++);
// increment first assign later
console.log(++counter); // returns the updated value

/*
    pre-increment is faster than post-increment 
    because post-increment keeps a copy of the previous value 
    where pre-increment directly adds 1 without copying the previous value.
*/

// the new value is passed on to the next iteration or next use of the variable
// const a = ++counter;
// const b = counter++;
// console.log(counter, a, b);

for (let i = 0; i <= 10; ++i) {
    // console.log(i);
}
let j = 0;
while (j <= 10) {
    // console.log(j);
    // j++;
    ++j;
}

// nullish coalescing
// nullish = null / undefined

let value = null;
console.log(value ?? "not null");
console.log("value" ?? value);
console.log("null" ?? "value");

console.log(true && "value");
console.log("value" && true);
// https://stackoverflow.com/questions/36704648/why-have-for-loops-with-pre-increment-the-same-behaviour-as-those-with-post-incr
