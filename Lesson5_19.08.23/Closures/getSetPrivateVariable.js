function privateVariable(number) {
    return {
        _get: () => number,
        _set: (newNumber) => number = newNumber,
    };
}

const secretValue = privateVariable(42);
console.log(secretValue._get());
secretValue._set(100);
console.log(secretValue._get());