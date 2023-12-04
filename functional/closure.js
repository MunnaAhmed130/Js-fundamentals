let counter = 0;

/*    -----------------------------------

// closure
const myFunction = () => {
    let counter = 1;
    console.log(counter);
    const childFunction = () => {
        console.log("nested function", counter++);
    };
    return childFunction;
};

const result = myFunction();
result();
result();
result();
console.log("g", counter);

----------------------------------     */

/*   ------------------------------------

// closure with IIFE
const privateCounter = (() => {
    let counter = 0;
    console.log(`Initial value: ${counter}`);
    return () => {
        console.log("IIFE", ++counter);
    };
})();

privateCounter();
privateCounter();
privateCounter();

console.log("g", counter);

------------------------------------      */

// /* ---------------------------------------
// a small game with closure
const credits = ((num) => {
    let credits = num;
    console.log(`Initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) {
            console.log(`playing game, ${credits} credits`);
        } else {
            console.log("not enough credits, game over!");
        }
    };
})(3);

credits();
credits();
credits();
credits();
credits();

// --------------------------------------------   */

/*  -----------------------------------------

// closure with object methods
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
price.setPrice(20);
console.log(price.getPrice());

-------------------------------------------- */
