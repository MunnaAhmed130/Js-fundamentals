let i = 0;

// for loop

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (; i < 0; i++) {
//     i++;
//     console.log(i);
// }

// i = 5;

// while loop

// while (i < 10) {
//     i++;
//     console.log(i);
// }

// do while loop

// do {
//     i++;
//     console.log(i);
// } while (i < 10);
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
    console.log(person[x], x);
}
