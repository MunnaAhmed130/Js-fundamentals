// on global level function can be found anywhere
console.log("print typeof", typeof print);

function print() {
  return "something";
}

console.log(print());
console.log("print typeof", typeof print);

// Never do this!
// on block level
// Some browsers will declare `foo` as the one returning 'first',
// while others — returning 'second'

const bool = true;
console.log("foo", typeof foo); // undefined

if (bool) {
  function foo() {
    return "first";
  }
} else {
  function foo() {
    return "second";
  }
}

console.log("foo", foo());
console.log("foo", typeof foo); // function

// Instead, use function expressions:
console.log("bar", typeof bar); // undefined

var bar;
if (false) {
  bar = function () {
    return "first";
  };
} else {
  bar = function () {
    return "second";
  };
}

console.log("bar", bar());

console.log("bar", typeof bar); // function
