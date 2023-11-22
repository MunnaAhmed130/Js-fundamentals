// Sequential vs concurrent vs parallel execution

function resolveHello() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Hello");
        }, 2000);
    });
}

function resolveWorld() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("World");
        }, 1000);
    });
}

// Sequential
// do this only if the 2nd function is dependent on 1st function
async function sequentialStart() {
    const hello = await resolveHello();
    console.log(hello);
    const world = await resolveWorld();
    console.log(world);
}

// sequentialStart();

// Concurrent
async function concurrentStart() {
    // call both func and store
    // concurrently fire off all your requests
    const hello = resolveHello();
    const world = resolveWorld();

    // await for the promise to be fulfilled
    // use await in the right order per requirement
    console.log(await hello); // logs after 2 sec
    console.log(await world); // logs after 2 sec
}

// concurrentStart();

// Parallel
function parallel() {
    // Promise.all([resolveHello(), resolveWorld()]).then((data) =>
    //     console.log(data));
    // Promise.all([
    //     (async () => console.log(await resolveHello()))(),
    //     (async () => console.log(await resolveWorld()))(),
    // ]);
    // console.log("Finally");
}
parallel();

async function parallel() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ]);
    console.log("Finally");
}
// parallel();
