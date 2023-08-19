function createCachingFunction() {
    return (number) => number * 2;
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));