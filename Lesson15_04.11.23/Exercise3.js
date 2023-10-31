function makeUppercase(value) {
    if (typeof(value) === "string") {
        return new Promise(function(resolve, reject) {
            resolve(value.toUpperCase());
        });
    }

    return new Promise(function(resolve, reject) {
        reject(new Error(`${value} is not a string!`));
    });
}

makeUppercase("jobo").then((result) => console.log(result))
                     .catch((error) => console.error(error.message));