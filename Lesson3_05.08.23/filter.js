const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element > 7;
}

function filter(arr, fun) {
    const resultArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}

console.log(filter(arr, callback));