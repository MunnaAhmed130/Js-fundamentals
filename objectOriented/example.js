function Student(name, marks) {
    // let student_name = name;
    // let student_marks = marks;
    Object.defineProperty(this, "name", {
        get: function () {
            return name;
        },
        set: function (name) {
            this.name = name;
        },
    });

    Object.defineProperty(this, "marks", {
        get: function () {
            return marks;
        },
        set: function (marks) {
            this.marks = marks;
        },
    });
}
var stud = new Student("Mercy", 60);
console.log(stud.name + " " + stud.marks);
console.log(stud, stud.__proto__);
