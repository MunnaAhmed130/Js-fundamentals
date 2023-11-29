// Array.from()
let val = Array.from(Array(10).keys()).map((x) => x + 1);
val = Array.from(Array(10), (_, x) => x + 1);
val = Array.from({ length: 10 }, (_, i) => i + 1);
// Array()
val = [...Array(10).keys()].map((x) => x + 1);
val = Array(10)
    .fill()
    .map((_, x) => x + 1);
console.log(val);
