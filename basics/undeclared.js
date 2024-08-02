// ------------------------- undeclared variable ---------------------------------

// you can also declare variable without any keyword
// and it will always be a global variable not matter where you declare

// it's more like a implicit/automatic declaration
// console.log(name); // referenceError: name is not defined
name = "hey"; // this should be avoided and can be avoided by using strict mode
console.log(name);

let name = "adam"; // uncomment and run this code

console.log(name);

// automatically declared/undeclared variables has to be initialized or it'll throw an error.
// color; // color is not defined

a = "Check";

function parent() {
  var d = "none";
  b = " my ";
  function child() {
    c = "scopes";
    console.log(a + b + c);
  }
  child();

  b = " your ";
  child();
}

parent();

console.log("a = " + a);
typeof b !== "undefined"
  ? console.log("b = " + b)
  : console.log("b is not defined in the global scope");
typeof c !== "undefined"
  ? console.log("c = " + c)
  : console.log("c is not defined in the global scope");

// console.log("d = " + d); // function scoped
