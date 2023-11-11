// TODO
// 1. Add flexibility to work with async
// 2. Create Promise chaining
// 3. Add Promise static methods

class MyPromise {
    constructor(callback) {
        this.status = "pending";
        this.value = null;

        const resolve = (value) => {
            if (this.status === "pending") {
                this.status = "fullfilled";
                this.value = value;
            }
        };

        const reject = (error) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = error;
            }
        }

        try {
            callback(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    then(fullfilledCallback, rejectedCallback) {
        if (this.status === "fullfilled") {
            fullfilledCallback(this.value);
        }
        if (this.status === "rejected") {
            rejectedCallback(this.value);
        }
    }

    catch(rejectedCallback) {
        if (this.status === "rejected") {
            rejectedCallback(this.value);
        }
    }
}

const promise1 = new MyPromise(function (resolve, reject) {
    resolve("Resolved");
});
promise1.then((res) => console.log(res), (err) => console.error(err));

const promise2 = new MyPromise(function (resolve, reject) {
    reject("Rejected");
});
promise2.then((res) => console.log(res), (err) => console.error(err));
