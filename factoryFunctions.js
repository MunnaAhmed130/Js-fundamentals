/*
sample Object

let person = {
    firstName: "john",
    lastName: "Doe",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

*/

let personActions = {
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

/*    factory function returns a new object
 */

function createPersonWithMethod(first, last) {
    return {
        firstName: first,
        lastName: last,
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
}

function createPersonWithPrototype(first, last) {
    let person = Object.create(personActions);
    person.firstName = first;
    person.lastName = last;
    return person;
}

let person = createPersonWithMethod("John", "Doe");
let person1 = createPersonWithPrototype("Jane", "Doe");

let objWithPrototype = Object.create(personActions);

console.log(person === person1);
console.log(person);
console.log(person1);
console.log(objWithPrototype);
