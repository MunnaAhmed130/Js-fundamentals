// ES6 classes are considered "syntactic sugar"

class User {
    // constructor function creates object based on class
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    // add method to prototype
    login() {
        this.score++;
        console.log(this.email, "just logged in");
        return this;
    }
    logout() {
        console.log(this.email, "just logged out");
        return this;
    }
    showScore() {
        console.log(`${this.name}'s score is ${this.score}`);
        return this;
    }
}

// new keyword creates a new empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method
let user1 = new User("david@gmail.com", "David");
let user2 = new User("adam@gmail.com", "Adam");

console.log(user1, user2);

// method chaining
user1.login().showScore().logout().login().showScore().logout();
