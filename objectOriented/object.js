/*
  An object is an unordered list of properties consisting of
  a name/key (always a string) and a value.
  When the value of a property is a function, it is called a method.

*/

// constructors make singleton
// Obeject.create()

// create object using `new` operator with a constructor
const object = new Object(); // {}
// console.log(object);

// object literals
const user = { name: "Nicholas" };
// console.log(user);

/*
 JS is a garbage collected language so we don't have worry about memory allocation
 but dereference objects so garbage collector can free up memory 
*/

// dereferencing data
user.name = null;
// console.log(user);

// adding properties
const sym = Symbol("key"); //  symbols as key
user[sym] = "key";
// console.log(sym);

// accessing property
console.log(user.name);
console.log(user[sym]);

// Deleting or removing properties
delete user.name;
console.log(user);

// encapsulation
const person = {
  firstName: "John",
  lastName: "doe",
  // symbol as key
  [sym]: "my key",
  email: "johndoe@gmail.com",
  lang: {
    eng: {
      proficiency: "70%",
    },
  },
};

// prevent adding properties to object
// Object.preventExtensions(person);

let key = "date of birth";
// person.key = 1999; // does not work with variables
person[key] = 1999;

// dot/bracket notation to add property
person.job = "archer";
// person[job] = "archer";  // error
person["job"] = "medic";

// get object's property descriptor
// console.log(Object.getOwnPropertyDescriptor(person, `firstName`));

// check if object has this property
// console.log(person.hasOwnProperty("heal"));

// console.log(person);

// dot/bracket notation to access property
// console.log(person["email"], person.health);

// why use bracket notation
// for dynamic access / passing a variable
// dynamic access / dynamic dispatch
for (let key in person) {
  // console.log(person[key]);
}

// object destructuring
const {
  firstName: name, // destructure firstname as name
  lastName,
  lang: {
    eng: { proficiency },
    ban = {}, // default value while destructuring
  },
  ...rest
} = person;

// console.log(proficiency, ban, name);
// console.log(firstName, lastName, health, email, job);
// rest.fullName = "Ahmed";
// console.log(rest);
// console.log(person[sym]);
// console.log(person);
// console.log(person.fullName());

// optional chaining
// console.log(person.lang.eng?.proficiency);
