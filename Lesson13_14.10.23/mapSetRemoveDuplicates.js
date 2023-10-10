function removeDyplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDyplicates([6, 4, 8, 6, 8, 5, 4, 0]));