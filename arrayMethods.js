// ------------- creating arrays -------------
// Array.from()
let vals = Array.from(Array(10).keys()).map((x) => x + 1);
vals = Array.from(Array(10), (_, x) => x + 1);
vals = Array.from({ length: 10 }, (_, i) => i + 1);

// Array()
vals = [...Array(10).keys()].map((x) => x + 1);
vals = Array(10)
    .fill()
    .map((_, x) => x + 1);
// console.log(val, val[10]);

// ---------------- slice / splice -------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let removedFruits = fruits.slice(-2); //  a copy
// console.log(fruits, removedFruits);

// let fruit = fruits.splice(2, 0, "Lemon", "Kiwi"); // add
// let fruit = fruits.splice(2, 1); // delete
// let fruit = fruits.splice(2, 1, "Lemon", "Kiwi"); // add & delete
// console.log(fruit);

// --------------------- for each -----------------

// console.log(vals);

const initApp = async () => {
    // useForEach(vals);
    // getPostSerialized(vals);
    // getPostsConcurrently(vals);
    getPostSerializedWithReduce(vals);
};

document.addEventListener("DOMContentLoaded", initApp);

const getPost = async (id) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const res = await data.json();
    // console.log(res);
    // short version
    // console.log(
    //     (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
    // );
    return await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).json();
};

// (async () => {
//     console.log(await getPost());
// })();

// console.log(getPost(1));

// the recieved datas are not serialized
// const useForEach = (ids) => {
//     ids.forEach(async (id) => {
//         const data = await getPost(id);
//         console.log(data);
//     });
// };

// serialized post
const getPostSerialized1 = async (ids) => {
    for (let i = 0; i < ids.length; i++) {
        const data = await getPost(ids[i]);
        console.log(data);
    }
    console.log(`waiting for the data`);
};
// simple syntax
const getPostSerialized2 = async (ids) => {
    for (const id of ids) {
        const data = await getPost(id);
        console.log(data);
    }
    console.log(`waiting for the data`);
};

// serialization is not guaranteed but it's faster
const getPostsConcurrently = async (ids) => {
    const posts = await Promise.allSettled(ids.map(async (id) => getPost(id)));
    console.log(posts);
    console.log(`I'll wait on you`);
};

// serialized data
const getPostSerializedWithReduce = async (ids) => {
    await ids.reduce(async (acc, id) => {
        // waits for the previous item to complete
        await acc;
        // get the next item
        const post = await getPost(id);
        console.log(post);
    }, Promise.resolve());
    console.log("waiting for the data");
};
