// build in iterator object
const array = [10, 20, 30];

console.log([10, 20][Symbol.iterator]().next());
// console.log([10, 20].next());

// -------------------------   custom iterable object

// objects with both iterator protocol and iterable protocol
// is called an iterable iterator.
const iterableObject = {
  current: 1,
  last: 5,

  // when objects have a `Symbol.iterator` method
  // the object is considered iterable

  [Symbol.iterator]() {
    return this;
  },

  // both symbol.iterator and next method don't use arrow function
  // because they need access to this keyword

  // an object with `next()` method is considered a iterator
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

// for..of only operates on iterable objects such as arrays
// by adding the `Symbol.iterables` method to the object
// we can make our custom object an iterable object

for (const num of iterableObject) {
  console.log(num); // Logs: 1, 2, 3, 4, 5
}

console.log(iterableObject);

// ----------------------------------------------------------

const customIterable = {
  current: 1,
  last: 5,

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const value of customIterable) {
  console.log(value); // Logs 1, 2, 3, 4, 5
}
