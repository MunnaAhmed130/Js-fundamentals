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
        }, 2000);
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
    const hello = resolveHello();
    const world = resolveWorld();

    console.log(await hello);
    console.log(await world);
}

concurrentStart();
