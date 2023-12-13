// composition vs inheritance

// inheritance
class Pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() {
        console.log("preparing...");
    }
    bake() {
        console.log("baking...");
    }
    ready() {
        console.log("Ready!");
    }
}

// Problem : Repeating methods - Not D.R.Y

class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing;
    }
    prepare() {
        console.log("preparing...");
    }
    toss() {
        console.log("Tossing...");
    }
    ready() {
        console.log("Ready!");
    }
}

class StuffedCrustPizza extends Pizza {
    stuff() {
        console.log("Stuffing the crust");
    }
}

class ButteredCrustPizza extends Pizza {
    butter() {
        console.log("Buttering the crust");
    }
}

// Problem: Repeating methods - Not D.R.Y
class StuffedButteredCrushPizza extends Pizza {
    stuff() {
        console.log("Stuffing the crust");
    }
    butter() {
        console.log("Buttering the crust");
    }
}

// Instead use composition for methods
// these functions return a method
const prepare = () => {
    return {
        prepare: () => console.log("preparing..."),
    };
};

const bake = () => {
    return {
        bake: () => console.log("baking..."),
    };
};

const ready = () => {
    return {
        ready: () => console.log("Ready!"),
    };
};

const toss = () => {
    return {
        toss: () => console.log("Tossing..."),
    };
};

const stuff = () => {
    return {
        stuff: () => console.log("Stuffing the crust"),
    };
};

const butter = () => {
    return {
        butter: () => console.log("Buttering the crust"),
    };
};

// console.log({ ...butter() });
const createPizza = (size, crust, sauce) => {
    const pizza = {
        size,
        crust,
        sauce,
        toppings: [],
    };
    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready(),
    };
};

const createSalad = (size, dressing) => {
    return {
        size,
        dressing,
        ...prepare(),
        ...toss(),
        ...ready(),
    };
};

// Compare to ES6 class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter(),
    };
};

// create a pizza
const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);
const davesPizza = createStuffedButteredCrustPizza(
    createPizza("medium", "thin", "original")
);
// console.log(somebodysPizza, davesPizza);

// what about the toppings?
const addTopping = (pizza, topping) => {
    // mutating the pizza object by pushing into the array
    pizza.toppings.push(topping);
    return pizza;
};

const jimsPizza = createPizza("medium", "thin", "original");
// console.log(jimsPizza);
console.log(addTopping(jimsPizza, "perpperoni"));
// console.log(jimsPizza);

// we need to clone the pizza object to avoid mutation
// function composition
// decorator function
const shallowPizzaCloneF = (fn) => {
    return (obj, array) => {
        const newObj = { ...obj };
        return fn(newObj, array);
    };
};

// short arrow function
const shallowPizzaClone = (fn) => (obj, array) => fn({ ...obj }, array);

let addToppings = (pizza, toppings) => {
    pizza.toppings = [...pizza.toppings, ...toppings];
    return pizza;
};

addToppings = shallowPizzaClone(addToppings);

const timsPizza = createPizza("medium", "thin", "original");
console.log(timsPizza);
console.log(addToppings(timsPizza, ["perpperoni"]));
console.log(timsPizza);
