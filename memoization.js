const initApp = () => {
    // const multiplyBy10 = memoizedMultiplyBy10();
    let memoizedMultBy10 = memoize(multiplyBy10);
    console.log(memoizedMultBy10(10));
    console.log(memoizedMultBy10(10));
    console.log(memoizedMultBy10(20));
    console.log(memoizedMultBy10(20));

    let memoizedAddMany = memoize(addMany);
    console.log(memoizedAddMany(10, 20, 30));
    console.log(memoizedAddMany(10, 20, 30));
    console.log(memoizedAddMany(10, 20, 30, 40));
    console.log(memoizedAddMany(10, 20, 30, 40));
    console.log(memoizedAddMany(10, 20, 30, 40));

    let memoizedFib = memoize(fib);
    console.log(memoizedFib(1));
    console.log(memoizedFib(2));
    console.log(memoizedFib(1), memoizedFib(2));
    console.log(memoizedFib(30), memoizedFib(40));
    console.log(memoizedFib(30), memoizedFib(40));
};

document.addEventListener("DOMContentLoaded", initApp);

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
};

const multiplyBy10 = (num) => {
    return num * 10;
};

const addMany = (...args) => {
    return args.reduce((acc, num) => acc + num);
};

const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        if (args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    };
};

// const memoizedMultiplyBy10 = () => {
//     const cache = {};
//     return (num) => {
//         if (num in cache) {
//             console.log(cache);
//             return cache[num];
//         }
//         const result = num * 10;
//         cache[num] = result;
//         return result;
//     };
// };

// understanding args behaviour
// const cache = {};
// const func = (...args) => {
//     console.log(args.toString());
//     if (args.toString() in cache) {
//         console.log(cache);
//         return cache[args.toString()];
//     }
//     const result = args[0] + args[1];
//     cache[args.toString()] = result;

//     return result;
// };

// console.log(func(100, 200));
// console.log(func(100, 200));
