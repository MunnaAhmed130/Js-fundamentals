const time = (fn, val) => {
    const start = Date.now();
    console.log(fn(val));
    const duration = Date.now() - start;
    return duration;
    // console.log(duration);
};

// not good for performance
const fib = (n) => {
    // if (n < 2) return n;
    if (n === 0) return 0;
    if (n == 1 || n == 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// memoize better
const memoFib = (n, memo = {}) => {
    memo = memo;
    // console.log(memo);
    if (memo[n]) return memo[n];
    // if (n < 2) return n;
    if (n === 0) return 0;
    if (n == 1 || n == 2) return 1;
    return (memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo));
};

console.log(memoFib(80));
// console.log(memoFib(40));

// not good
const memoFib2 = (obj = {}) => {
    let memo = obj;
    return (n) => {
        console.log(memo);
        if (memo[n]) return memo[n];
        if (memo[n - 1] && memo[n - 2]) {
            memo[n] = memo[n - 1] + memo[n - 2];
            return memo[n];
        }

        if (n === 0) return 0;
        if (n == 1 || n == 2) return 1;
        return (memo[n] = fib(n - 1) + fib(n - 2));
    };
};

// let optimizedFib = memoFib();
// console.log("time", time(optimizedFib, 41));
// console.log("time", time(optimizedFib, 42));

// good for performance but imperative
const fib2 = (pos) => {
    // if (pos === 0) return pos;
    if (pos < 3) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
};

// fib(10);
// console.log(fib(40));
// console.log(fib2(15));
