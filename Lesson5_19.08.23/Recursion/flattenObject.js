const nestedObject = { 
    a: 1, 
    b: { 
        c: 2, 
        d: { 
            e: 3, 
            f: 4, 
        }, 
    }, 
    g: 5, 
};

function flattenObject(nestedObject) {
    let isFoundObj = false;

    for (let key in nestedObject) {
        if (typeof(nestedObject[key]) === "object" && nestedObject[key] !== null) {
            isFoundObj = true;
        }
    }

    if (!isFoundObj) {
        return nestedObject;
    }

    const currentObj = {};

    for (let key in nestedObject) {
        if (typeof(nestedObject[key]) === "object" && nestedObject[key] !== null) {
            for (let nestedKey in nestedObject[key]) {
                currentObj[`${key}.${nestedKey}`] = nestedObject[key][nestedKey];
            }
        } else {
            currentObj[key] = nestedObject[key];
        }
    }

    return flattenObject(currentObj);
}

console.log(flattenObject(nestedObject));