const numbers = [2, 3, 4, 2, 5, 2, 6, 2];

function countOccurrences(array, number) {
    let isEqualNumber = true;
    let idx = 0;

    while (idx < array.length) {
        if (array[idx] !== number) {
            isEqualNumber = false;
            break;
        }

        idx++;
    }

    if (isEqualNumber) {
        return array.length;
    }

    const currentNumbers = [];
    for (let i = 0; i < idx; i++) {
        currentNumbers.push(array[i]);
    }
    for (let i = idx + 1; i < array.length; i++) {
        currentNumbers.push(array[i]);
    }

    return countOccurrences(currentNumbers, number);
}

console.log(countOccurrences(numbers, 2));