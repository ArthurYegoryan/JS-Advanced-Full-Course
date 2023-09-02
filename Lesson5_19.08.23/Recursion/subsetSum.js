// Not finished

const inputArray = [2, 4, 6, 8];

function subsetSum(array, number) {
    if (array.length === 0) {
        return "Input not empty array!";
    } else if (array.includes(number)) {
        return true;
    } else if (array.reduce((acc, val) => acc + val, 0) < number) {
        return false;
    }

    for (let i = 0; i < array.length - 1; i++) {
        const currentDigit = array.slice(i, i + 1);
        const remainedArray = subsetSum(array.slice(i + 1));

        for (let j = 0; j < remainedArray.length; j++) {
            if (currentDigit.concat(remainedArray[j]).reduce((acc, val) => acc + val, 0) === number) {
                return true;
            }
        }
    }

    return false;
}

console.log(subsetSum(inputArray, 10))