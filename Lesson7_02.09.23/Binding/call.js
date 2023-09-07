const info = {
    name: "Arthur",
};

function getInfo(surname, age) {
    console.log(`Name: ${this.name}, Surname: ${surname}, Age: ${age}`);
}

function call(func, context, ...args) {
    if (context.hasOwnProperty(func)) {
        return "Invalid binding!";
    }

    context[func] = func;

    return context[func](...args);
}

getInfo("Yegoryan", 26);
call(getInfo, info, "Yegoryan", 26);