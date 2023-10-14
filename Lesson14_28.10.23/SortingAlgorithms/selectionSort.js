const array = [15, 6, 8, 3, 9, 0, 7, 2];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[minIndex], array[i]] = [array[i], array[minIndex]];
        }
    }

    return array;
}

console.log(selectionSort(array));