/*
// car object
let car = { wheels: 4 };
paint("red")(car);
console.log(car);

*/

// Car factory function
function Car(color) {
    let car = { wheels: 4 };
    paint(color)(car);
    return car;
}

// function decorator is a function that returns a function
// which sets a key value pair in a object
function paint(color = "red") {
    return function (car) {
        car.color = color;
    };
}

let myCar = Car("yellow");
console.log(myCar);
