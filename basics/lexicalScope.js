// Define a variable in the global scope:
let counter = 1;

// Define nested functions - ex- lexical
function outer() {
    let counter = 5;
    function inner() {
        function innermost() {
            return ++counter;
        }
        return innermost();
    }
    console.log(counter);
    return inner();
}

console.log(outer()); // lexical scope
