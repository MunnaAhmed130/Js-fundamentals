const myAwesomeArray = [1, 2, 3, 4, 5];

// -------------------  speed check

const startForEach = performance.now();
myAwesomeArray.forEach((x) => (x + x) * 10000000000);
const endForEach = performance.now();
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`);

const startMap = performance.now();
myAwesomeArray.map((x) => (x + x) * 10000000000);
const endMap = performance.now();
console.log(`Speed [map]: ${endMap - startMap} miliseconds`);

// --------------------- for each -----------------

// why you should not use foreach

// console.log(vals);

const initApp = async () => {
    // useForEach(vals);
    // getPostSerialized(vals);
    // getPostsConcurrently(vals);
    getPostSerializedWithReduce(vals);
};

// document.addEventListener("DOMContentLoaded", initApp);

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
