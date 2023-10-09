const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

// takes 4 arg
function myFunction(total, value, index, array) {
    console.log(total, value, index, array);
    return total + value;
}
// total is the the initial value / previously returned value
// value is the 1st index value of numbers
// the sum is stored in the 1st arg
