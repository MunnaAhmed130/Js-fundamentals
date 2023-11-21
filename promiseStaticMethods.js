// resolve method
// Promise.resolve("Hello").then((data) => console.log(data));

// reject method
// Promise.reject(new Error("Hello"))
//     .then((data) => console.log(data)) // then is never used
//     .catch((err) => console.log(err.message));

const promise1 = Promise.reject("Hello");
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "foo");
    // setTimeout(reject, 1000, "Err");
});

// returns catch for any error
// Promise.all([promise1, , promise2])
//     .then((value) => console.log(value))
//     .catch((err) => console.log(err));

// returns on all promise completed
// Promise.allSettled([promise1, , promise2])
// .then((values) =>values.forEach((value) => console.log(value))
// .then((values) => console.log(values));

// returns the first promise completed
Promise.race([promise1, promise2])
    .then((string) => console.log(string))
    .catch((err) => console.log(err));

// returns the first resolved promise
// Promise.any([promise1, promise2]).then((data) => console.log(data));
