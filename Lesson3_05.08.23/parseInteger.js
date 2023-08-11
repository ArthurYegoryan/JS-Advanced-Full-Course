const arr = ["1", "px", "2323"];

function parseInteger(arr) {
    const resultArr = arr.map((element) => Number(element) || null);

    return resultArr;
}

console.log(parseInteger(arr));