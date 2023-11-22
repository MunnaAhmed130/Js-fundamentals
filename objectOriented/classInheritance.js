class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

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

class Admin extends User {
    // if Admin has no constructor it will use User class constructor
    deleteUser(user) {
        users = users.filter((u) => u.email !== user.email);
    }
}

let user1 = new User("david@gmail.com", "David");
let user2 = new User("adam@gmail.com", "Adam");
const admin = new Admin("munna@gmail.com", "Munna");

let users = [user1, user2, admin];
// admin.deleteUser(admin);

console.log(users);
