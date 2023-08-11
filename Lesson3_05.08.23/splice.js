const cars = ["Mercedes", "BMW", "Tesla", "Ferrari", "Opel", "Zap"];

function splice(arr, startIndex = 0, deleteCount = 0, ...items) {
    const deletedElements = [];

    if (startIndex < 0 && startIndex >= -arr.length) {
        startIndex += arr.length;
    } else if (startIndex < -arr.length) {
        startIndex = 0;
    } else if (startIndex >= arr.length) {
        for (let i = 0; i < items.length; i++) {
            arr.push(items[i]);
        }

        return deletedElements;
    }

    if (deleteCount > arr.length - startIndex) {
        deleteCount = arr.length - startIndex;
    } else if (deleteCount < 0) {
        deleteCount = 0;
    }

    for (let i = startIndex; i < startIndex + deleteCount; i++) {
        deletedElements.push(arr[i]);
    }

    const lastRemeinedElements = [];

    for (let i = startIndex + deleteCount; i < arr.length; i++) {
        lastRemeinedElements.push(arr[i]);
    }

    arr.length -= (arr.length - startIndex);

    for (let i = 0; i < items.length; i++) {
        arr.push(items[i]);
    }

    for (let i = 0; i < lastRemeinedElements.length; i++) {
        arr.push(lastRemeinedElements[i]);
    }

    return deletedElements;
}

console.log(splice(cars, 3, 2, "06", "07", "Niva"));