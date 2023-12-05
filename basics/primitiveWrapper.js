let str = "My name is Adam";
let strLength = str.length;
console.log(strLength);

// console.log("Hello".length);

// behind the scene
// new String(), wrapper function, a constructor function, creates object
let strObj = new String(str);
console.dir(strObj);
strLength = strObj.length;

strObj = null;
console.dir(strObj);

// when you use object property or method on a
console.log(str.length === new String(str).length);

console.log((str.custom = 1)); // outputs 1 because str.custom is created
console.log(str.custom); // undefined because it doesn't exist anymore
