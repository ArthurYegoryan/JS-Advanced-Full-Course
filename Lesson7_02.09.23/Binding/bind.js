const info = {
    name: "Arthur",
};

function getInfo(surname, age) {
    console.log(`Name: ${this.name}, Surname: ${surname}, Age: ${age}`);
}

function bind(func, context, ...args) {
    return function() {
        if (context.hasOwnProperty(func)) {
            return "Invalid binding!";
        }
    
        context[func] = func;
    
        return context[func](...args);
    }
}

getInfo("Yegoryan", 26);
bind(getInfo, info, "Yegoryan", 26)();