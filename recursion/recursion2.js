function printNumber(index, arr) {
    if (index === arr.length) return;
    console.log(arr[index]);
    printNumber(index + 1, arr);
}

// printNumber(0, [1, 2, 3, 4]);

function power(number, exponent) {
    if (exponent === 1) return number;
    // console.log(ex)
    return number * power(number, exponent - 1);
}

// console.log(power(2, 5));

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4));

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
let string = "Hello My Friends";
console.log(reverseString(string));
// let s = string.slice(1);
