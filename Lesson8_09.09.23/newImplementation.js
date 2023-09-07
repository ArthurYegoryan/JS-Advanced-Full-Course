function myNew(constructor, ...args) {
    const obj = {};

    Object.setPrototypeOf(obj, constructor.prototype);

    const result = constructor.call(obj, ...args);

    if (typeof(result) === "object") {
        return result;
    }
    return obj;
}

function Info(...args) {
    [this.name, this.surname, this.age] = args;
}

const info = myNew(Info, "Arthur", "Yegoryan", 26);
console.log(info);