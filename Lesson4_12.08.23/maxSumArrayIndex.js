const matrix = [
    [4, 7, 8], [6, 10, 9], [5, 12, 3],
    [11, 3, 6], [8, 6, 3], [7, 5, 9],
    [7, 8, 9], [12, 13, 7], [16, 2, 4]
];

function getMaxSumArray(matrix) {
    let maxSum = -Infinity;
    let maxSumArrayIndex = 0;

    for (let i  = 0; i < matrix.length; i++) {
        let currentSum = getSumOfArray(matrix[i]);

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxSumArrayIndex = i;
        }
    }

    return maxSumArrayIndex;
}

function getSumOfArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(getMaxSumArray(matrix));