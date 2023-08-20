const number = 7;

function fibonacci(number) {
    if (number < 0) {
        return "Number can't be negative!";
    } else if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(number));