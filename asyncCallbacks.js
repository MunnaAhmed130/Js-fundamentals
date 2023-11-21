// callback function
function greet(name) {
    console.log(`Hello ${name}`);
}

// higher order function
setTimeout(greet, 2000, "World");
