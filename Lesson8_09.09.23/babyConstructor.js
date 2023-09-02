function Baby(name, age, favouriteToy) {
    this.name = name;
    this.age = age;
    this.favouriteToy = favouriteToy;
}

Baby.prototype.play = function() { return `Playing with ${this.favouriteToy}.`};

const baby = new Baby("Mane", 1, "tiknik");
console.log(baby.play());