const arr = [ 1, 2, 3, 4 ];

function shift(arr) {
    const firstElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.length -= 1;

    return firstElement;
}

console.log(shift(arr));