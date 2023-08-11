const arr = [ 1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN ];

function getNumbers(arr) {
    const resultArr = arr.filter((element) => typeof(element) === "number" && !Number.isNaN(element));

    return resultArr;
}

console.log(getNumbers(arr));