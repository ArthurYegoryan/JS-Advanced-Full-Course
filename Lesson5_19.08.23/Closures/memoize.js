function fibonacci(n) {
    let firstNumber = 0;
    let secondNumber = 1;
    let thirdNumber = 0;

    for (let i = 2; i <= n; i++) {
        thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }

    return thirdNumber;
}

function memoize(fibonacci) {
    const resultsObj = {};

    return function(number) {
        if (resultsObj.hasOwnProperty(number) && resultsObj[number] !== undefined) {
            return resultsObj[number] + " (cached)";
        }

        const result = fibonacci(number);

        resultsObj[number] = result;

        return result + " (calculated)";
    }
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));