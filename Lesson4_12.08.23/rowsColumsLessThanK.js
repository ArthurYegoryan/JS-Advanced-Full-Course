const matrix = [
    [6, 2, 3, 4, 1],
    [3, 5, 0, 2, 1],
    [4, 1, 2, 1, 3],
    [0, 2, 1, 1, 2],
    [3, 1, 2, 0, 2],
];

const number = 10;

function getBiggestInnerValidMatrix(matrix, number) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            getCurrentValidMatrix(matrix, number, i, j);
        }
    }
}

function getCurrentValidMatrix(matrix, number, startI, startJ) {
    const currentMatrix = [];
    const currentRow = [];

    let currentRowSum = 0;
    let endJ = startJ

    for (let i = startJ; i < matrix[startI].length; i++) {
        let currentElement = matrix[startI][i];

        if (currentRowSum + currentElement <= number) {
            currentRowSum += currentElement;
            currentRow.push(currentElement);
            endJ = i;
        } else {
            currentMatrix.push(Array.from(currentRow));
            currentRow.length = 0;
            currentRowSum = 0;
            break;
        }
    }

    const possibleResultRowtArray = Array.from(currentMatrix[0]);

    for (let i = startI + 1; i < matrix.length; i++) {
        for (let j = startJ; j <= endJ; j++) {
            let currentElement = matrix[i][j];

            if (currentRowSum + currentElement <= number) {
                currentRowSum += currentElement;
                currentRow.push(currentElement);
            } else {
                // currentMatrix.push(Array.from(currentRow));
                // currentRow.length = 0;
                // currentRowSum = 0;
                break;
            }
        }
        currentMatrix.push(Array.from(currentRow));
        currentRow.length = 0;
        currentRowSum = 0;
    }

    const currentColumnsMatrix = [];
    const currentColumnArray = [];
    let currentColumnSum = 0;    

    for (let j = 0; j < currentMatrix[0].length; j++) {
        for (let i = 0; i < currentMatrix.length; i++) {
            if (currentColumnSum + currentMatrix[i][j] <= number) {
                currentColumnSum += currentMatrix[i][j];
                currentColumnArray.push(currentMatrix[i][j]);
            } else {
                // currentColumnsMatrix.push(Array.from(currentColumnArray));
                // currentColumnArray.length = 0;
                // currentColumnSum = 0;
                break;
            }
        }
        currentColumnsMatrix.push(Array.from(currentColumnArray));
        currentColumnArray.length = 0;
        currentColumnSum = 0;
    }

    const possibleResultColumntArray = Array.from(currentColumnsMatrix[0]);

    let columnMatrixMinLength = currentColumnsMatrix[0].length;
    for (let i = 1; i < currentColumnsMatrix.length; i++) {
        if (currentColumnsMatrix[i].length < columnMatrixMinLength) {
            columnMatrixMinLength = columnMatrixMinLength;
        }
    }
    for (let i = 0; i < currentColumnsMatrix.length; i++) {
        currentColumnsMatrix[i].length = columnMatrixMinLength;
    }

    // const currentLargestMatrix = Math.max(possibleResultRowtArray.length, possibleResultColumntArray.length, )

    return currentColumnsMatrix;
}

console.log(JSON.stringify(getCurrentValidMatrix(matrix, number, 0, 0)));