const nestedArray = [1, [2, [3, 4], 5], 6];

function flattenArray(array) {
    let isFoundArray = false;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            isFoundArray = true;
        }
    }

    if (!isFoundArray) {
        return array;
    }

    const currentArray = [];

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                currentArray.push(...array[i]);
            } else {
                currentArray.push(array[i]);
            }
        }

    return flattenArray(currentArray);
}

console.log(flattenArray(nestedArray));