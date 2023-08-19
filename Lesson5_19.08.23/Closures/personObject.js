function createPerson(name, age) {
    return {
        _getName: () => name,
        _getAge: () => age,
        _setName: (newName) => name = newName,
        _setAge: (newAge) => age = newAge,
    };
}

const person = createPerson("Alice", 30);
console.log(person._getName());
console.log(person._getAge());
person._setName("Bob");
person._setAge(25);
console.log(person._getName());
console.log(person._getAge());