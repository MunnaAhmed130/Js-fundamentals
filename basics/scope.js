var foo = "global";

function funcFoo() {
    if (true) {
        // block of code
        var foo = "local-foo";
        bar = "local-bar"; // declaration without keyword variable becomes global
    }
    return foo; // var is not block scoped
}

console.log(funcFoo());
console.log(foo); // var is function scoped
console.log(bar);

if (true) {
    var foo = "local-foo";
}

console.log(foo); // var is not block scoped
