const arr = [10, 6, 15, 4, 1, 8];

function callback(total, element) {
    return total + element;
}

const initialValue = 0;

function reduce(arr, fun, initialValue = arr[0]) {
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result = fun(result, arr[i]);
    }

    result += initialValue;

    return result;
}

console.log(reduce(arr, callback, initialValue));