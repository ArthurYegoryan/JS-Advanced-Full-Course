console.log(1)                               // 1. 1

setTimeout(() => {
    console.log(2)                           // 6. 2
}, 20)

Promise.resolve()
    .then(() => {
        console.log(3)                       // 3. 3
        return 1
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))     // 4. undefined, 5
    .then((res) => console.log(res))         // 5. 1

console.log(6)                               // 2. 6