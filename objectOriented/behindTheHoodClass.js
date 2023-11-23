// behind the hood of class
// this is the constructor
function User(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
}

// only constructors have .prototype property
User.prototype.login = function () {
    this.score++;
    console.log(this.email, "just logged in");
    return this;
};

User.prototype.logout = function () {
    console.log(this.email, "just logged out");
    return this;
};

User.prototype.showScore = function () {
    console.log(`${this.name}'s score is ${this.score}`);
    return this;
};

function Admin(email, name) {
    // constructor inheritance
    User.call(this, email, name);
    this.role = "Admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
    users = users.filter((u) => u.email !== user.email);
};

// instances have __proto__ , Object.getPrototypeOf() and no .prototype
let user1 = new User("david@gmail.com", "David");
let user2 = new User("adam@gmail.com", "Adam");
const admin = new Admin("munna@gmail.com", "Munna");

let users = [user1, user2, admin];

admin.deleteUser(user1);
console.log(users);
