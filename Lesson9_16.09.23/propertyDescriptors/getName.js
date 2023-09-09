const obj = {
    _name: "",

    get name() {
        return this._name;
    },

    set name(newName) {
        const arrNames = newName.split(", ");

        const infoArray = arrNames.map(elem => [elem, elem.length]);

        this._name = infoArray;
    }
};

obj.name = "Hamlet, Artavazd";
console.log(obj.name);