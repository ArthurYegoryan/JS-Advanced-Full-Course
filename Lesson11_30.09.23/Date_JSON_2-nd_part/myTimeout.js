function printText() {
    console.log(`My text is printed at ${Date.now()}.`);
}

function myTimeout(func, interval) {
    const currentMillies = Date.now();
    console.log("Function is called at " + currentMillies)

    while(true) {
        if (Date.now() >= currentMillies + interval) {
            return func();
        }
    }
}

myTimeout(printText, 5000);