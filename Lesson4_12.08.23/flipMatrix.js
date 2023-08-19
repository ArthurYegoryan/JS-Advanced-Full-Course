const matrix = [
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8, 9 ],
];

function flip(matrix) {
    const resultMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        const currentArr = [];

        for (let j = 0; j < matrix[i].length; j++) {
            currentArr.push(matrix[j][i]);
        }

        resultMatrix.push(currentArr);
    }

    return resultMatrix;
}

console.log(JSON.stringify(flip(matrix)));