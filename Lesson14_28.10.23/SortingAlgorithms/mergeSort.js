const array = [17, 50, 19, 37, 35, 28, 14, 45, 26, 15, 29, 4, 1, 39];

function merge(array1, array2) {
    const result = [];
    
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) result.push(array1[i++]);
        else result.push(array2[j++]);
    }

    while (i < array1.length) {
        result.push(array1[i++]);
    }

    while (j < array2.length) {
        result.push(array2[j++]);
    }

    return result;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

console.log(mergeSort(array));