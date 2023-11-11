// const value = 10;
// console.log(this);
// function context() {
//     console.log(this);
// }

// context();

const func = () => {
    console.log(this);
};
func();

var obj = {
    name: "John",
    log: function () {
        console.log(this);
    },
};

obj.log();
