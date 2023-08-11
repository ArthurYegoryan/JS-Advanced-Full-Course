const arr = [0, [1, 2], [[[3, 4]]], [[5, 6]]];

function flat(arr, depth = 1) {
    let resultArr = Array.from(arr);
    
    for (let i = 0; i < depth; i++) {
        const currentArr = [];
        
        for (let j = 0; j < resultArr.length; j++) {
            if (Array.isArray(resultArr[j])) {
                currentArr.push(...resultArr[j]);
            } else {
                currentArr.push(resultArr[j]);
            }
        }

        resultArr.length = 0;
        resultArr = Array.from(currentArr);
    }

    return resultArr;
}

console.log(JSON.stringify(flat(arr, 3)));