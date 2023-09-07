function add(a, b, c) {
    return a + b + c;
}

function curry(func) {
    // return function curried(...args) {
    //     if (args.length >= func.length) {
    //         return func.apply(this, args);
    //     } else {
    //         return function(...args2) {
    //             return curried.apply(this, args.concat(args2));
    //         }
    //     }        
    // }
    function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...remainedArgs) {
                return curried(...args, ...remainedArgs);
            }
        }
    }
    
    return curried;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));