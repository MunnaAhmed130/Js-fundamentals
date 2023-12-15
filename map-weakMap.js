/*
    Map    

    similar to objects but keys can be any datatype
    remembers the original insertion order
    can be directly iterated and their value can be accessed.
    better for programs that require the addition or removal of elements frequently.

    Map's references to objects are strongly held and will not allow for garbage collection. 
    This can get expensive if Map reference large objects that are no longer needed.

*/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);

// add new elements
fruits.set("Melon", 400);
// change existing values
fruits.set("apples", 400);

console.log(fruits.get("apples"));
console.log(fruits.has("Melon"));
console.log(fruits.size);

fruits.delete("Melon");

// fruits.clear();
console.log(fruits);
console.log(fruits instanceof Map, typeof fruits);

// ---------------------------- WeakMap
/*
    similar to set but only contains objects as keys
    this collection is weak because it allows for objects 
    which are no longer needed to be cleared from memory.
    weakMaps are not iterable
*/

const weakMap = new WeakMap();

weakMap.set({}, 100);

console.log(weakMap);
