let x = 10; // free variable

function foo() {
    console.log(x); // what is the value of x ? 10 or 20
}

function bar(funArg) {
    let x = 20;
    funArg(); // 10, not 20!
}

// Pass `foo` as an argument to `bar`.
bar(foo);
