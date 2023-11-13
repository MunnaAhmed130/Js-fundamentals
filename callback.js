// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Keep numbers based on callback function
function keepNum(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Call keepNum with a callback
const posNumbers = keepNum(myNumbers, (x) => x >= 0);
const negNumbers = keepNum(myNumbers, (x) => x <= 0);

console.log(posNumbers, negNumbers);
