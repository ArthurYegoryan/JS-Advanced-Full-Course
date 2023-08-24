function add(a, b, c) { 
    return a + b + c; 
}

function partial(func, a) {
    return function(...args) {
        return func(a, ...args);
    }
}

const add5 = partial(add, 5);
console.log(add5(10, 20));