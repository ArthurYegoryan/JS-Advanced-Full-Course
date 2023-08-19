const matrix = [
    ["m", "n", "l"],
    ["a", "h", "o"], 
    ["p", "i", "l"],
];

const word = "lol";

function isFoundWordInMatrix(matrix, word) {
    let currentI = 0;
    let currentJ = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (word[0] === matrix[i][j]) {
                currentI = i;
                currentJ = j;

                if (isFoundWordWithFirstLetter(matrix, word, currentI, currentJ)) {
                    return true;
                }
            }
        }
    }

    return false;
}

function isFoundWordWithFirstLetter(matrix, word, currentI, currentJ) {
    if (currentJ - (word.length - 1) >= 0) {
        let possibleWord = "";

        for (let i = currentJ; i >= currentJ - (word.length - 1); i--) {
            possibleWord += matrix[currentI][i];
        }

        if (possibleWord === word) {
            return true;
        }
    }
    if (currentJ + word.length - 1 <= matrix[currentI].length - 1) {
        let possibleWord = "";

        for (let i = currentJ; i < currentJ + word.length; i++) {
            possibleWord += matrix[currentI][[i]];
        }

        if (possibleWord === word) {
            return true;
        }
    }
    if (currentI - (word.length - 1) >= 0) {
        let possibleWord = "";

        for (let i = currentI; i >= currentI - (word.length - 1); i--) {
            possibleWord += matrix[i][currentJ];
        }

        if (possibleWord === word) {
            return true;
        }
    }
    if (currentI + word.length - 1 <= matrix.length) {
        let possibleWord = "";

        for (let i = currentI; i < currentI + word.length; i++) {
            possibleWord += matrix[i][currentJ];
        }

        if (possibleWord === word) {
            return true;
        }
    }


    return false;
}

console.log(isFoundWordInMatrix(matrix, word));