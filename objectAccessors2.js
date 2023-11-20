const add = (num) => {
    let count = 0;
    return {
        get number() {
            return count;
        },
        set number(num) {
            count += num;
        },
    };
};

const result = add();
result.number = 10;
result.number = 20;
console.log(result.number);
