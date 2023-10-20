// Not finished

const array = [17, 50, 19, 37, 35, 28, 14, 45, 26, 15, 29, 4, 1, 39];

function setPivot(array, startIndex, endIndex) {
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

    return array;
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = setPivot(array, 0, array.length - 1);

    quickSort()
}

console.log(setPivot(array, 0, array.length - 1));