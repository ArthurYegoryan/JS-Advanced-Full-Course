const matrix = [
    [4, 7, 8], [6, 10, 9], [5, 12, 3],
    [11, 3, 6], [8, 6, 3], [7, 5, 9],
    [7, 8, 9], [12, 13, 7], [16, 2, 4]
];

function getMinValuesOfArrays(matrix) {
    const minValues = [];

    for (let i = 0; i < matrix.length; i++) {
        minValues.push(getMinValueOfArray(matrix[i]));
    }

    return minValues;
}

function getMinValueOfArray(array) {
    return Math.min(...array);
}

console.log(getMinValuesOfArrays(matrix));