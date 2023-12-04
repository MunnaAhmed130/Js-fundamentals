function foo() {
    let x = 10;
    // Closure, capturing environment of `foo`.
    function bar() {
        // x++;
        return x;
    }
    // Upward funarg.
    return bar;
}

let x = 20;

// Call to `foo` returns `bar` closure.
let bar = foo();

console.log(bar()); // 10, not 20!
// console.log(bar());
