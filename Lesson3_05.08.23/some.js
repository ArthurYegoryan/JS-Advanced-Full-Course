const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element < 2;
}

function some(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return true;
        }
    }

    return false;
}

console.log(some(arr, callback));