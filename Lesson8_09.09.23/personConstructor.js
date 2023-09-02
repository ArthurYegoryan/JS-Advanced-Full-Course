function Person(name, age) {
    this.name = name;
    this.age = age;

    this.stomach = [];
}

Person.prototype.eat = function(meal) {
    if (this.stomach.length === 10) {
        return;
    }

    this.stomach.push(meal);
};
Person.prototype.poop = function() { this.stomach.length = 0 };
Person.prototype.toString = function() { return `${this.name}, ${this.age}`};

const firstPerson = new Person("Arthur", 25);

firstPerson.eat("Lahmajo");
console.log(firstPerson.stomach);

firstPerson.poop();
console.log(firstPerson.stomach);
console.log(firstPerson.toString());