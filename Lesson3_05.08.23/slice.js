const arr = [10, 6, 15, 4, 1, 8];

function slice(startIndex = 0, endIndex = arr.length) {
    const resultArr = [];
    
    for (let i = startIndex; i < endIndex; i++) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}

console.log(slice(2, 5));