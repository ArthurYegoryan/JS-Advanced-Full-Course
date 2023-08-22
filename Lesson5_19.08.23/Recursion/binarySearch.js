// Not finished
// Don't return the index

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];

function binarySearch(array, number) {
    if (array.length === 1) {
        if (array[0] === number) {
            return ;
        } else {
            return -1;
        }
    }

    if (number < array[Math.ceil(array.length / 2)]) {
        return binarySearch(array.slice(0, Math.ceil(array.length / 2)), number);
    } 
    return binarySearch(array.slice(Math.ceil(array.length / 2)), number);
}

console.log(binarySearch(sortedArray, 9));