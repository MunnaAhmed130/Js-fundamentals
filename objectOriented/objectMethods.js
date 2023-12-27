// Initialize an object
const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar",
};

// creates a new object and link it to the prototype of barista
const barista = Object.create(employees);
barista.position = "barista";
console.log(barista);

// returns an array of object key value pair as arrays
const entries = Object.entries(employees);
console.log(entries);

/* 
// Loop through the results
entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
});
*/

// returns an array of object keys
const keys = Object.keys(employees);

// returns an array of object values
const values = Object.values(employees);

// console.log(keys, values);

const name = {
    firstName: "Philip",
    lastName: "Fry",
};

const details = {
    job: "Delivery Boy",
    employer: "Planet Express",
};

// merge all and stores to the 1st object - shallow copy
const assigncharacter = Object.assign({}, name, details);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const newObj = Object.assign({}, obj1, obj2, obj3);
console.log(newObj, obj1);

// shallow copying/cloning
const character = { ...name, ...details };

// change last name 1st time
name.lastName = "blinders";
// console.log("assign", assigncharacter);
// console.log("character", character);

// seal prevents adding new properties
Object.seal(name);
name.lastName = "codes";
name.fullName = "Philip codes";
// console.log("name", name);

// freeze prevents from adding or modifying properties
Object.freeze(name);
// change last name 2nd time
// console.log("name", name);
