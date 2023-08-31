// const resultArr = [];

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }
    
//     return number * factorial(number - 1);
// }

// function getCountSameLetters(string) {
//     let countSameLetters = 0;

//     for (let i = 0; i < string.length; i++) {
//         for (let j = i + 1; j < string.length; j++) {
//             if (string[i] === string[j]) {
//                 countSameLetters++;
//             }
//         } 
//     }

//     return countSameLetters;
// }

// function permutations(string) {
//     if (resultArr.length === factorial(string.length) / (getCountSameLetters(string) * 2)) {
//         return resultArr;
//     }
// }

// console.log(permutations("hello"));

function getPermutations(string) {
    if (string.length === 0) {
        return "Please enter non empty string!";
    } else if (string.length === 1) {
        return string;
    }

    const permutations = [];

    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];

        if (string.indexOf(currentChar) !== i) {
            continue;
        }

        const remeinedString = string.slice(0, i) + string.slice(i + 1);

        for (const permutation of getPermutations(remeinedString)) {
            permutations.push(currentChar + permutation);
        }
    }

    return permutations;
}

console.log(getPermutations("hello"));