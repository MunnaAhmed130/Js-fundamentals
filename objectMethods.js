// Initialize an object
const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar",
};

const barista = Object.create(employees);
barista.position = "barista";
console.log(barista);
const entries = Object.entries(employees);
/* 
console.log(entries);

// Loop through the results
entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
});
*/

const keys = Object.keys(employees);
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
