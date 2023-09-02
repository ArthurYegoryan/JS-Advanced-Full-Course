function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.compareAge = function(person) {
    let text = "is the same age as me.";

    if (this.age < person.age) {
        text = "is older than me.";
    } else if (this.age > person.age) {
        text = "is younger than me.";
    }

    return `${person.name} ${text}`;
}

const firstPerson = new Person("Samuel", 24);
const secondPerson = new Person("Joel", 30);
const thirdPerson = new Person("Lily", 25);

console.log(firstPerson.compareAge(secondPerson));
console.log(secondPerson.compareAge(firstPerson));
console.log(thirdPerson.compareAge(secondPerson));