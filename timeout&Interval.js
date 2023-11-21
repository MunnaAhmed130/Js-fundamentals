// timeout & intervals are both asynchronous and higher order function
// greet is asynchronous callbacks
function greet(name) {
    console.log(`Hello ${name}`);
    // setTimeout(greet, 1000, "recursive");
}

// syntax - setTimeout(function, milliseconds, param1, param2, ...)
const timeoutId = setTimeout(greet, 1000, "World");

// syntax - setInterval(function, milliseconds, param1, param2, ...)
// const intervalId = setInterval(greet, 1000, "Woorrldd");

clearTimeout(timeoutId); // clearing timeout

// clearInterval(intervalId); // clearing interval

// recursive
// setTimeout(greet, 1000, "World");
