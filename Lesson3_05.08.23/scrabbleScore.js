const words = ["aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];
const word = "Hello";

function scrabbleScoreCalculator(words, word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase().charCodeAt() < 97 || word[i].toLowerCase().charCodeAt() > 122) {
            return "Bad word!!! Please input only letters!";
        }
    }

    let result = 0;

    for (let i = 0; i < word.length; i++) {
        result += findLetterValue(word[i], words);
    }

    return result;
}

function findLetterValue(letter, words) {
    let value = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (letter.toLowerCase() === words[i][j]) {
                value += i + 1;
                return value;
            }
        }
    }
}

console.log(scrabbleScoreCalculator(words, word));