// javascript promise

const myPromise = (getGarlic) => {
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

const onFulfilled = (message) => {
    console.log("Make noodles because", message);
    return myPromise(true);
};

const onFailure = (message) => {
    console.log("Make toast because", message);
};

myPromise(true)
    .then(onFulfilled)
    .then(onFulfilled)
    .then(onFulfilled)
    .then(onFulfilled)
    .then((message) => {
        console.log("Make noodles because", message);
        return myPromise(false);
    })
    .catch(onFailure);
