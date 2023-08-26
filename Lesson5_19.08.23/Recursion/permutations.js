// Not finished

const resultArr = [];

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    
    return number * factorial(number - 1);
}

function getCountSameLetters(string) {
    let countSameLetters = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                countSameLetters++;
            }
        } 
    }

    return countSameLetters;
}

function permutations(string) {
    if (resultArr.length === factorial(string.length) / (getCountSameLetters(string) * 2)) {
        return resultArr;
    }

    // let currentString = string.slice(0, string.length - 2);

    // for (let i = currentString.length; i < string.length; i++) {

    // }

    // return currentString;
}

console.log(permutations("hello"));