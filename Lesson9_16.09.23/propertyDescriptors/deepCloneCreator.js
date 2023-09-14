const info = {
    age: 26,
}

Object.defineProperties(info, {
    "name": {
        value: "Arthur",
        writable: false,
        enumerable: true,
        configurable: false,
    },
    "surname": {
        value: "Yegoryan",
        writable: false,
        enumerable: true,
        configurable: false,
    },
});

function deepCloneCreator(object) {
    const objectPropDescriptors = Object.getOwnPropertyDescriptors(object);

    const cloneObject = {};

    for (let key in objectPropDescriptors) {
        cloneObject[key] = objectPropDescriptors[key];
    }

    return cloneObject;
}

console.log("Original");
console.log(Object.getOwnPropertyDescriptor(info, "name"));
console.log(Object.getOwnPropertyDescriptor(info, "surname"));

const cloneObj = deepCloneCreator(info);

console.log("Cloned");
console.log(Object.getOwnPropertyDescriptor(info, "name"));
console.log(Object.getOwnPropertyDescriptor(info, "surname"));