
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}
let fib = num => {
    // put your code here to address problems
    if (num < 2) {
        return num;
    }
    return fib(num - 1) + fib(num - 2);
}
fib = memoize(fib);
module.exports = fib;
