// short circuit evaluation

// or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// default value
let name;
console.log(name || "Adam");

// guard value
let result = (a, b) => {
    if (b == 0) {
        return "Error";
    }
    return a / b;
};

console.log(result(6, 0));

result = (a, b) => {
    return b !== 0 && a / b;
};

console.log(result(6, 0) || "Error");
