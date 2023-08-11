const arr = [10, 6, 15, 4, 1, 8];

function callback(element) {
    return element < 6;
}

function find(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

console.log(find(arr, callback));