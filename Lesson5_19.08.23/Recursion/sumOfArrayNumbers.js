function arraySum(array) {
    if (array.length === 0) {
        return 0;
    }

    return array.pop() + arraySum(array);
}

console.log(arraySum([1, 2, 3, 4, 5]));