const info = {
    name: "Arthur",
};

function getInfoApply(argsArray) {
    const [surname, age] = argsArray;
    console.log(`Name: ${this.name}, Surname: ${surname}, Age: ${age}`);
}

function apply(func, context, args) {
    return function() {
        if (context.hasOwnProperty(func)) {
            return "Invalid binding";
        }

        context[func] = func;

        return context[func](args);
    }
}

getInfoApply(["Yegoryan", 26]);
apply(getInfoApply, info, ["Yegoryan", 26])();