// generator function statement
// allow you to pause and resume execution
// enabling more complex iteration and control flows
function* simpleGenerator() {
  // yield is like return keyword but only useful inside a gnerator
  // used to pause the function execution
  yield 1;
  yield 2;
  yield 3;
}

// calling generator object returns a generator object
// multiple instances of generator object
const generatorObject = simpleGenerator();
const generatorObject2 = simpleGenerator();

console.log(generatorObject);

// next method can be used to resume the function execution
// until the next yield expressions or until the function completes
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

console.log(generatorObject2.next());

// ---------------------------------------

function* generateId() {
  let id = 1;

  // while (true) {
  yield id;
  return ++id;
  // }
}

const generateId1 = generateId();
console.log(generateId1.next());
console.log(generateId1.next());
console.log(generateId1.next());
