let str = "My name is Adam";
let strLength = str.length;
console.log(strLength);

// console.log("Hello".length);

// behind the scene
// new String(), wrapper function, a constructor function, creates object
let strObj = new String(str);
strLength = strObj.length;
strObj = null;

console.dir(strObj);

// when you use object property or method on a
console.log(str.length === new String(str).length);
