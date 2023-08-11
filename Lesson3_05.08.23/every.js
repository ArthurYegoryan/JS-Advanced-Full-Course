const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element < 16;
}

function every(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i]) === false) {
            return false;
        }
    }

    return true;
}

console.log(every(arr, callback));