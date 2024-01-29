var foo = "global";

function funcFoo() {
    // block of code
    if (true) {
        var foo = "local-foo";
        bar = "local-bar"; // declaration without keyword variable becomes global
    }

    return foo; // var is not block scoped
}

console.log("funcFoo() prints", funcFoo());
console.log("foo prints", foo); // var is function scoped so foo prints "global"
console.log("bar prints", bar);

let a = 100;
const b = 200;
var c = 300;
if (true) {
    let a = 10;
    const b = 20;
    c = 30;
    var foo = "local-foo";
}

// var c = 20;
console.log("foo prints", foo); // var is not block scoped
console.log(a, b);
console.log(c);
