// getter setter
const add = (num = 0) => {
    let count = num;
    return {
        get addNumber() {
            return count;
        },
        set addNumber(num) {
            count += num;
        },
    };
};

const result = add(10);
result.addNumber = 10;
result.addNumber = 20;
console.log(result.addNumber);
