const numbers = [45, 4, 9, 16, 25];
const bigNumber1 = numbers.filter(function (value, index, array) {
    // console.log(value, index, array);
    return value > 18;
});

const bigNumber = numbers.filter((value, index, array) => value > 18);
console.log(bigNumber);
