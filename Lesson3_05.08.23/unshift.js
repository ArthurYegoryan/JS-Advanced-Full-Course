const arr = [1, 2, 3, 4];

function unshift(arr, ...elementsToAdd) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + elementsToAdd.length] = arr[i];
    }

    for (let i = 0; i < elementsToAdd.length; i++) {
        arr[i] = elementsToAdd[i];
    }

    return arr.length;
}

console.log(unshift(arr, 6, 7, 8));