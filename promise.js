// javascript promise

const myPromise = new Promise((resolve, reject) => {
    let getGarlic = true;
    console.log("pending...");
    if (getGarlic == true) {
        resolve("resolved: There is Garlic Powder");
    } else {
        reject("rejected: There is no Garlic Powder");
    }
});

// myPromise
//     .then((message) => {
//         console.log("Make noodles because the promise is" + "" + message);
//     })
//     .catch((message) => {
//         console.log("Make toast because the promise is " + "" + message);
//     });
