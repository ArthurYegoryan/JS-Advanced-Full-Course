const obj = {
    a: "1",
    b: "2",
    c: "2",
    d: "2",
};

function invertKeysValues(obj) {
    let resultObj = {};

    let arrKeys = Object.keys(obj);
    let keysInvertedValues = [];
    let valuesInvertedKeys = [];

    for (let i = 0; i < arrKeys.length; i++) {
        if (arrKeys[i] === null) {
            continue;
        }

        let currentArr = [arrKeys[i]];
        for (let j = i + 1; j < arrKeys.length; j++) {
            if (obj[arrKeys[i]] === obj[arrKeys[j]]) {
                currentArr.push(arrKeys[j]);
                arrKeys[j] = null;
            }
        }

        if (currentArr.length === 1) {
            keysInvertedValues.push(currentArr[0]);
        } else {
            keysInvertedValues.push(currentArr);
        }

        if (!valuesInvertedKeys.includes(arrKeys[i])) {
            valuesInvertedKeys.push(obj[arrKeys[i]]);
        }
    }

    for (let i = 0; i < valuesInvertedKeys.length; i++) {
        resultObj[valuesInvertedKeys[i]] = keysInvertedValues[i];
    }

    return resultObj;
}

console.log(JSON.stringify(invertKeysValues(obj), undefined, 2));