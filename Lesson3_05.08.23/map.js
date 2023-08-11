const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element *= 2;
}

function map(arr, fun) {
    const resultArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(fun(arr[i]));
    }

    return resultArr;
}

console.log(map(arr, callback));