const nestedNumbers = [1, [2, 3], [4, [5, 6]]];

// flatten nested arrays to a certain level of depth
// default value is 1
// const flatResult = nestedNumbers.flat();
// console.log(flatResult);

// flatMap is a combination of map & flat
// flatMap flattens all sub-array to one level
// for further flattening you can use flat() method
const flatMapResult = nestedNumbers.flatMap((x) => x).flat();
console.log(flatMapResult);

const myArr = [1, 2, 3, 4, 5, 6];

const numbers = [1, 2, 3, 4];
const result = numbers.flatMap((numero) => [numero, [numero * 2]]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]

const newArr = myArr.flatMap((x) => (x == 6 ? [7, [8, 9], 10] : x));

// const newArr = myArr.map((x) => (x == 6 ? [7, 8, 9, 10] : x));

console.log(newArr);
