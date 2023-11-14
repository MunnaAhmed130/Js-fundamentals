// async func returns a promise
async function myFunction() {
    // return "Hello";
    let myPromise = new Promise(function (resolve) {
        setTimeout(() => resolve("I love You !!"), 2000);
    });

    console.log("Hey");
    // await waits for a resolved promise
    console.log(await myPromise);
    return await myPromise;
}

myFunction().then((value) => console.log(value));
