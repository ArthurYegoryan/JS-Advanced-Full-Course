'use strict'

const info = {
    name: "Arthur",
    surname: "Yegoryan",
    age: 26,
};

function Immutable(object) {
    this.makeImmutable = function() {
        Object.freeze(object);
    }
}

const immutable = new Immutable(info);

immutable.makeImmutable();

console.log(Object.isFrozen(info));

info.gender = "male";