const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element < 6;
}

function findIndex(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex(arr, callback));