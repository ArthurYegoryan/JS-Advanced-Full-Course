function squarePromise(promise) {
    if (!isNaN(Number(promise))) {
        return new Promise(function(resolve, reject) {
            resolve(Math.pow(Number(promise), 2));
        });
    }

    return new Promise(function(resolve, reject) {
        reject(new Error(`Cannot convert ${promise} to a number!`));
    });
}

const promise = new Promise(function(resolve, reject) {
    resolve("666");
});

promise.then((result) => squarePromise(result))
       .then((result) => console.log(result))
       .catch((error) => console.error(error.message));