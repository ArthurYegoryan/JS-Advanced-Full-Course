const matrix = [
    [0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1, 0],
];

function getBeggistOnesAreasLength(matrix) {
    let maxLengthOfMatrix = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const currentMatrixLength = getCurrentMatrix(matrix, i, j);

                if (currentMatrixLength > maxLengthOfMatrix) {
                    maxLengthOfMatrix = currentMatrixLength;
                }
            }
        }
    }

    return maxLengthOfMatrix;
}

function getCurrentMatrix(matrix, startI, startJ) {
    let count = 0;
    
    for (let j = startJ; j < matrix[startI].length; j++) {
        if (matrix[startI][j] === 1) {
            count++;
        } else {
            break;
        }
    }

    if (startI + count > matrix.length) {
        let dif = startI + count - matrix.length;
        count -= dif;
    }

    for (let j = startJ; j < startJ + count; j++) {
        for (let i = startI + 1; i < startI + count; i++) {
            if (matrix[i][j] !== 1) {
                return i - startI;
            }
        }
    }

    return count;
    
    // for (let i = startI; i < endI; i++) {
    //     const currentArray = [];

    //     for(let j = startJ; j < endJ; j++) {
    //         currentArray.push(matrix[i][j]);
    //     }

    //     const currentArrayCopy = Array.from(currentArray);

    //     currentMatrix.push(currentArrayCopy);
    //     currentArray.length = 0;
    // }

    // return currentMatrix.length;
}

console.log(getBeggistOnesAreasLength(matrix));