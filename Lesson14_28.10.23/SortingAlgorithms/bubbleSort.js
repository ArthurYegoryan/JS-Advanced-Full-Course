const array = [15, 6, 8, 3, 9, 0, 7, 2];

function bubbleSort(array) {
    let noSwap = true;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                noSwap = false;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

        if (noSwap) return array;
    }

    return array;
}

console.log(bubbleSort(array));