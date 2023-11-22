setTimeout(() => console.log("Hello World!"), 2000);

const promise = new Promise((resolve, reject) => {
    resolve("resolved");
});

promise.then((data) => console.log(data));

console.log("Bye");
