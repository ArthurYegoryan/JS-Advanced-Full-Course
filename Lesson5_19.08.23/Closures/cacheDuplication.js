function createCachingFunction() {
    const obj = {};
    
    return function(number) {
        if (obj.hasOwnProperty([number]) && obj[number] === number * 2) {
            return obj[number] + " (cached)";
        }

        obj[number] = number * 2;

        return number * 2 + " (calculated)";
    };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));