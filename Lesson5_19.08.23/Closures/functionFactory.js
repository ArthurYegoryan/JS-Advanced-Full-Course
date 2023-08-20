function createCalculator(operation) {
   return {
        add: (a, b) => a + b,
        substract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    }[operation];
}

const add = createCalculator("add");
console.log(add(3, 5));

const substract = createCalculator("substract"); 
console.log(substract(6, 4));

const multiply = createCalculator("multiply"); 
console.log(multiply(2, 4));

const divide = createCalculator("divide"); 
console.log(divide(12, 4));