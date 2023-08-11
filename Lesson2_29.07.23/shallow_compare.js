const firstObj = {
    a: "1",
};

const secondObj = {
    a: "1",
};

function shallowCompare(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);
    const firstObjValues = Object.values(firstObj);

    const secondObjKeys = Object.keys(secondObj);
    const secondObjValues = Object.values(secondObj);

    let isKeysSimilar = true;
    let isValuesSimilar = true;

    if (firstObjKeys.length !== secondObjKeys.length || firstObjValues.length !== secondObjValues.length) {
        return false;
    }

    for (let i = 0; i < firstObjKeys.length; i++) {
        if (firstObjKeys[i] !== secondObjKeys[i]) {
            isKeysSimilar = false;
        }
        if (firstObjValues[i] !== secondObjValues[i]) {
            isValuesSimilar = false;
        }
    }

    if (isKeysSimilar && isValuesSimilar) {
        return true;
    } else {
        return false;
    }
}

console.log(shallowCompare(firstObj, secondObj));