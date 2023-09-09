const info = {
    name: "Arthur",
    surname: "Yegoryan",
    age: 26,
};

const validationRules = {
    name: {
        value: info.name,
        writable: false,
        enumerable: true,
        configurable: true,
    },
    surname: {
        value: info.surname,
        writable: true,
        enumerable: false,
        configurable: true,
    },
    age: {
        value: info.age,
        writable: false,
        enumerable: false,
        configurable: false,
    },
};

function setValidationRules(object, objectRules) {
    const validatedInfo = {};

    for (let key in object) {
        Object.defineProperty(validatedInfo, `${key}`, objectRules[`${key}`]);
    }

    return validatedInfo;
}

console.log(Object.getOwnPropertyDescriptors(setValidationRules(info, validationRules)));