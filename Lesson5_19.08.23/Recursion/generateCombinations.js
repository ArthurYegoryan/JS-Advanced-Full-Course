const inputArray = [1, 2, 3, 4];

function generateCombinations(array, length) {
    if (array.length === 0) {
        return "Input any array!";
    } else if (length <= 0 || length > array.length) {
        return "Invalid length!";
    } else if (length === array.length) {
        return [array];
    } else if (length === 1) {
        return array.map(elem => [elem]);
    }
  

    const resultArray = [];

    for (let i = 0; i <= array.length - length; i++) {
        const currentDigit = array.slice(i, i + 1);
        const remainedArray = generateCombinations(array.slice(i + 1), length - 1);

        for (let j = 0; j < remainedArray.length; j++) {
            resultArray.push(currentDigit.concat(remainedArray[j]));
        }
    }

    return resultArray;
}

console.log(JSON.stringify(generateCombinations(inputArray, 2)));