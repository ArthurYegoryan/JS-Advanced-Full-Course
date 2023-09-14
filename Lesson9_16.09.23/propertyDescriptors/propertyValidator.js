const schema = {
    name: {
        value: "",
        writable: true,
        validate: (value) => typeof value === "string",
    },
    age: {
        value: 0,
        writable: true,
        validate: (value) => typeof value === "number" && value >= 18,
    },
};

const info = {
    name: {
        value: "Arthur",
        writable: true,
        validate: (value) => typeof value === "string",
    },
    age: {
        value: 26,
        writable: true,
        validate: (value) => typeof value === "number" && value >= 18,
    },
};

function validator(object) {
    let existError = false;

    for (let key in object) {
        try {
            if (!object[key].validate(object[key].value)) {
                existError = true;
                throw new Error();
            }
        } catch (err) {
            console.error(err + `: Invalid property value!`);
        }
    }

    if (!existError) return "Success validation!\n---------------------";

    return `Validation not passed!\n---------------------`;
}

console.log(validator(schema));
console.log(validator(info));