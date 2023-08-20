const number = 5;

function factorial(number) {
    if (number < 0) {
        return "Number can't be negative!";
    } else if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log(factorial(5));