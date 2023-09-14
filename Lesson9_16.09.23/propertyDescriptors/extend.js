const myObj = {
    prop1: "value1",
};

function extend(objectForExtend, propObject) {
    for (let key in propObject) {
        Object.defineProperty(objectForExtend, key, propObject[key]);
    }

    return objectForExtend;
}

extend(myObj, {
    prop2: { value: "value2", writable: false },
    prop3: {
        get() {
            return "computed";
        },
    },
});

console.log(JSON.stringify(Object.getOwnPropertyDescriptors(myObj), undefined, 2));