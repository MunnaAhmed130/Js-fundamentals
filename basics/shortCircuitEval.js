// short circuit evaluation (cs)

// or is evaluated until we get one true
// if the first value is true then a short circuit occurs
console.log(true || true); // cs
console.log(true || false); // cs
console.log(false || true);
console.log(false || false);

// and is evaluated until we get one false
// if the first value is false then a short circuit occurs
console.log(true && true);
console.log(true && false);
console.log(false && true); // cs
console.log(false && false); // cs

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
