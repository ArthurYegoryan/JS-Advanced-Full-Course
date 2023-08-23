// Not finished

const inputArray = [1, 2, 3, 4];

function generateCombinations(array, length) {
    const possibleVariants = factorial(array.length) / (factorial(array.length - length) * factorial(length));

    return possibleVariants;
}

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}