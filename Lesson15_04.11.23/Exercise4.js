const promise = new Promise(function(resolve, reject) {
    resolve(6);
});

function double(value) {
    return 2 * value;
}

function mapPromise(promise, callback) {
    return promise.then(function(result) {
        return new Promise(function(resolve, reject) {
            resolve(callback(result));
        })
    }).catch(function(error) {
        return new Promise(function(resolve, reject) {
            reject(error);
        })
    });
}

mapPromise(promise, double)
    .then((result => console.log(result)))
    .catch(error => console.error(error.message));