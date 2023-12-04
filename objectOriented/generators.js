// generator statement
function* simpleGenerator() {
    // yield is like return keyword but
    // only useful inside a gnerator
    yield 1;
    yield 2;
    yield 3;
}

const generatorObject = simpleGenerator();
const generatorObject2 = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject2.next());

function* generateId() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const generateId1 = generateId();
console.log(generateId1.next());
console.log(generateId1.next());
console.log(generateId1.next());
