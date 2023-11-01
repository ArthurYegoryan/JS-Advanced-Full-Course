// Question
// Why don't work sequencly?

Promise.resolve()
.then(() => console.log(1))                                // 1
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error(); })        // 2
.then(() => console.log(4))
.then(() => console.log(4))                                 // Error:

Promise.resolve()
.then(() => console.log(11))                                // 11
.then(() => { console.log(12); throw new Error(); })        // 12
.catch(() => console.log(13))                               // 13
.catch(() => console.log(14))
.then(() => console.log(15))                                 // 15