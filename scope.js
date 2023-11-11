var foo = "global";

function funcFoo() {
    if (true) {
        // block of code
        var foo = "local";
    }
    console.log(foo); // var is not block scoped
}

console.log(funcFoo());
console.log(foo); // var is function scoped

if (true) {
    var foo = "local";
}

console.log(foo); // var is not block scoped
