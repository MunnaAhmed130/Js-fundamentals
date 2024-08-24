// NFE = Named Function Expression
// NFE are better for debugging
// named function expression is only available in the inner scope of the function
let exp = function foo() {
  // inner scope
  console.log(typeof foo, typeof exp);
};

exp();
console.log(typeof exp);

exp = function foo() {
  console.log("updated!");
};

exp();

// anonnymous function expression
let anonymous = function () {};

// arrow function
let arrow = () => {};
