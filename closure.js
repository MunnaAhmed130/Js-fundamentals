let counter = 1;

// closure
const myFunction = () => {
    console.log(counter);
    const childFunction = () => {
        console.log(counter++);
    };
    return childFunction;
};

const result = myFunction();
// console.log(result);
result();
result();
result();
// console.log("g", counter);

// closure
function applePrice() {
    var fruit = "apple";
    let price = 10;
    let discount = 0.05;

    var util = {
        getPrice: function () {
            console.log(fruit);
            return price;
        },
        setPrice: function (newPrice) {
            price = newPrice;
        },
    };
    return util;
}

var price = applePrice();
// price.setPrice(20);
// console.log(price.getPrice());
