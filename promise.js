const myPromise = (getGarlic) => {
    // promise constructor
    return new Promise((resolve, reject) => {
        if (getGarlic == true) {
            resolve("There is Garlic Powder");
        } else {
            reject("There is no Garlic Powder");
        }
    });
};

// const myPromise = new Promise((resolve, reject) => {
//     let getGarlic = false;
//     // console.log("pending...");
//     if (getGarlic == true) {
//         resolve("There is Garlic Powder");
//     } else {
//         reject("There is no Garlic Powder");
//     }
// });

// callbacks
const onFulfilled = (message) => {
    console.log("Make noodles because", message);
    // return myPromise(true);
};

const onFailure = (message) => {
    console.log("Make toast because", message);
};

// not encouraged
// myPromise(true).then(onFulfilled, onFailure);

// Encouraged
// catch will also catch error from then method
// both then and catch methods return promises
myPromise(true).then(onFulfilled).catch(onFailure);

// chaining promise
// myPromise(true)
//     .then(onFulfilled)
//     .then(onFulfilled)
//     .then(onFulfilled)
//     .then(onFulfilled)
//     .then((message) => {
//         console.log("Make noodles because", message);
//         return myPromise(false);
//     })
//     .catch(onFailure);
