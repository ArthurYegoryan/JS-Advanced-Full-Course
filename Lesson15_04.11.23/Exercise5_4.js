let a = 5;

setTimeout(() => {
    console.log(a);                            // 4. 25
    a = 10;
}, 0);

let p = new Promise((resolve, reject) => {
    console.log(a);                            // 1. 5
    a = 25;
    resolve();
});

p.then(res => {
    console.log('final result ', res)          // 3. final result undefined
});

console.log(a);                                 // 2. 25