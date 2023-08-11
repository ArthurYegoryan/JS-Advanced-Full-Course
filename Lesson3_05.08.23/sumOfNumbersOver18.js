const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function sumOfNumbersOver18(arr) {
    const filteredArr = arr.filter((element) => element >= 18);

    const result = filteredArr.reduce((sum, element) => sum + element, 0);

    return result;
}

console.log(sumOfNumbersOver18(arr));