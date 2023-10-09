function fibonacci(number) {
    if (number < 0) return "Invalid number!";
    if (number === 0) return 0;
    if (number === 1) return 1;

    return fibonacci(number - 1) + fibonacci(number - 2);
}

function memoizedFibonacci() {
    const results = new Map();

    return function(index) {
        index -= 1;

        if (results.has(index)) {
            return results.get(index) + " Cached.";
        }

        const value = fibonacci(index);
        results.set(index, value);

        return results.get(index) + " Calculated.";
    }
}

const getFibonacciNumberByIndex = memoizedFibonacci()
console.log(getFibonacciNumberByIndex(6));
console.log(getFibonacciNumberByIndex(7));
console.log(getFibonacciNumberByIndex(6));
console.log(getFibonacciNumberByIndex(7));