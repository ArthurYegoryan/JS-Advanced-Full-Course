function power(number, exponent) {
    if (exponent < 0) {
        return (1 / number * power(number, exponent + 1));
    } else if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return number;
    }

    return number * power(number, exponent - 1); 
}

console.log(power(2, 3));