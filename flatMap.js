const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);

// flatMap flattens all sub-array to one level
const newArr = myArr.flatMap((x) => (x == 6 ? [7, [8, 9], 10] : x));

// const newArr = myArr.map((x) => (x == 6 ? [7, 8, 9, 10] : x));

console.log(newArr);
