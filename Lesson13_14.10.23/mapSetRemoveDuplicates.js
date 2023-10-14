// Version 1

// function removeDyplicates(array) {
//     return array.filter((item, index) => array.indexOf(item) === index);
// }


// Version 2

function removeDyplicates(array) {
    return Array.from(new Set(array));
}

console.log(removeDyplicates([6, 4, 8, 6, 8, 5, 4, 0]));