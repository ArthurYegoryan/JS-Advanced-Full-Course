const arr = ["Mercedes", "BMW", "Tesla", "Ferrari"];

function callback(element) {
    console.log(element);
}

function forEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}

forEach(arr, callback);