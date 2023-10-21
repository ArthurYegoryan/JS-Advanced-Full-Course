const array = [17, 50, 19, 37, 35, 28, 14, 45, 26, 15, 29, 4, 1, 39];

function setPivot(array, startIndex = 0, endIndex = array.length - 1) {
    let pivot = array[startIndex];
    let pivotIndex = startIndex;
    let swappingElemIndex = pivotIndex + 1;

    for (let i = swappingElemIndex; i <= endIndex; i++) {
        if (array[i] <= pivot) {
            if (swappingElemIndex !== i) {
                [array[swappingElemIndex], array[i]] = [array[i], array[swappingElemIndex]];
            }

            swappingElemIndex++;
        }
    }

    [array[swappingElemIndex - 1], array[pivotIndex]] = [array[pivotIndex], array[swappingElemIndex - 1]];

    return swappingElemIndex - 1;
}

function quickSort(array, startIndex = 0, endIndex = array.length - 1) {
    if (startIndex < endIndex) {
        const pivotIndex = setPivot(array, startIndex, endIndex);

        quickSort(array, startIndex, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, endIndex);
    }

    return array;
}

console.log(quickSort(array, 0, array.length - 1));