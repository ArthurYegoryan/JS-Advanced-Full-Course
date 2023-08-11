const arr = [1, 2, 3, 4];

function push(arr, ...elementsToAdd) {
    const arrLength = arr.length;
    
    for (let i = 0; i < elementsToAdd.length; i++) {
        arr[arrLength + i] = elementsToAdd[i];
    }

    return arr.length;
}

console.log(push(arr, 6, 7, 8));