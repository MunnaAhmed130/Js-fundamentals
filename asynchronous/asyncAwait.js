// async func returns a promise
async function myFunction() {
    // return "Hello";
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("How are you!!"), 2000);
    });

    console.log(myPromise);
    // console.log("Hey");
    // await waits for a resolved promise
    return await myPromise;
}

myFunction().then((value) => console.log(value));

async function greet() {
    // both return same output
    // return "Hello";  // implicit resolve return
    return Promise.resolve("Hello");
}

// console.log(greet());
// greet().then((data) => console.log(data));
