function sumOfDigits(number) {
    if (number < 0) {
        return "Number can't be negative!";
    } else if (number === 0) {
        return 0;
    }

    const lastDigit = number % 10;

    return lastDigit + sumOfDigits(Math.trunc(number / 10));
}

console.log(sumOfDigits(12345));