const arr = [10, 6, 15, 4, 1, 8];

function callback(total, element) {
    return total + element;
}

const initialValue = 0;

function reduce(arr, fun, initialValue) {
    let result = 0;

    let i = 0;
    if (initialValue === undefined) {
        i++;
        initialValue = arr[0];
    }

    while (i < arr.length) {
        result = fun(result, arr[i++]);
    }

    result += initialValue;

    return result;
}

console.log(reduce(arr, callback));