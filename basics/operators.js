let counter = 1;
// stores the updated value & doesn't return the updated value
// assign first increment later
// console.log(counter++);
// the new value is passed on to the next iteration or next use of the variable
++counter;
console.log(counter);
// increment first assign later
// console.log(++counter); // returns the updated value

for (let i = 0; i <= 10; ++i) {
    // console.log(i);
}
let j = 0;
while (j <= 10) {
    console.log(j);
    // j++;
    ++j;
}

// https://stackoverflow.com/questions/36704648/why-have-for-loops-with-pre-increment-the-same-behaviour-as-those-with-post-incr
