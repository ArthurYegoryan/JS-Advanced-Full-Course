const arr = [1, 2, 3, 4];

function pop(arr) {
    const lastElement = arr[arr.length - 1];

    arr.length -= 1;

    return lastElement;
}

console.log(pop(arr));