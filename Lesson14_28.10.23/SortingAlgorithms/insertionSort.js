const array = [17, 50, 19, 37, 35, 28, 14, 45, 26, 15, 29, 4, 1, 39];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElemIndex = i;
        const currentElem = array[i];

        for (let j = i; j >= 0; j--) {
            if (currentElem < array[j - 1]) {
                array[j] = array[j - 1];
                currentElemIndex--;
            } else {
                break;
            }
        }

        array[currentElemIndex] = currentElem;
    }

    return array;
}

console.log(insertionSort(array));