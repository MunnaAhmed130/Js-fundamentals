/*
    similar to array but cannot contain duplicate values
    sets are objects/collection without keys
    Set's references to objects are strongly held and will not allow for garbage collection. 
    This can get expensive if sets reference large objects that are no longer needed.
*/
const letters = new Set(["a", "b", "c"]);

// a set can hold any value of any data type
letters.add("e");
letters.add(["f"]);
letters.add({ letter: "g" });

// console.log(letters.has("e"));
// console.log(letters, letters.values());
// console.log(letters.size);

// console.log("delete", letters.delete("e"));

// remove all elements of set
// letters.clear();
// console.log(letters);

// for (let elem of letters) {
//     console.log(elem);
// }

// ----------------------- WeakSet

/*
    similar to set but only contains objects
    this collection is weak because it allows for objects 
    which are no longer needed to be cleared from memory.
    weaksets are not iterable
*/

const weakSet = new WeakSet();
console.log(weakSet);

let obj = {
    name: "Adam",
    msg: "Hi",
};

weakSet.add(obj);
console.log(weakSet.has(obj));
console.log(weakSet);
