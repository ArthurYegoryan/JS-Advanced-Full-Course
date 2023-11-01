
Promise.resolve()
    .then(data => {
        throw new Error("Api Error");
        return 1;
    })
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error.message);        // Api Error
        return "2";
    })
    .then(data => {
        console.log(data);                 // 2
    })