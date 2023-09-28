// TODO
// Add validations of energy and try catches

const animals = [
    {
        name: "Tiger_1",
        type: "tiger",
        sound: "Vu vu",
        energy: 15,
    },
    {
        name: "Tiger_2",
        type: "tiger",
        sound: "Vu vu",
        energy: 15,
    },
    {
        name: "Monkey_1",
        type: "monkey",
        sound: "Oooo Oooo",
        energy: 20,
    },
    {
        name: "Monkey_2",
        type: "monkey",
        sound: "Oooo Oooo",
        energy: 20,
    },
    {
        name: "Snake_1",
        type: "snake",
        sound: "Tss tss",
        energy: 10,
    },
    {
        name: "Snake_2",
        type: "snake",
        sound: "Tss tss",
        energy: 10,
    },
]

const foods = [
    {
        name: "Fish_1",
        type: "fish",
    },
    {
        name: "Fish_2",
        type: "fish",
    },
    {
        name: "Grain_1",
        type: "grain",
    },
    {
        name: "Grain_2",
        type: "grain",
    },
    {
        name: "Meat_1",
        type: "meat",
    },
    {
        name: "Meat_2",
        type: "meat",
    },
]

class Jungle {
    #animals = [];
    #foods = [];

    constructor(animals, foods) {
        this.#animals = animals;
        this.#foods = foods;
    }

    addJungleMember(member) {
        if (member.hasOwnProperty("energy")) {
            this.#animals.push(member);
            return;
        }

        this.#foods.push(member);
    }

    removeJungleMember(member) {
        if (member.hasOwnProperty("energy")) {
            const animalIndexForRemove = this.#animals.findIndex(({name}) => name === member.name); 
            this.#animals = [...this.#animals.slice(0, animalIndexForRemove), ...this.#animals.slice(animalIndexForRemove + 1)];
            return;
        }

        const foodIndexForRemove = this.#foods.findIndex(({name}) => name === member.name); 
        this.#foods = [...this.#foods.slice(0, foodIndexForRemove), ...this.#foods.slice(foodIndexForRemove + 1)];
    }

    changeAnimalEnegy(animalName, energy) {
        this.#animals.find(({name}) => name === animalName).energy += energy;
    }

    getAllAnimals() {
        return this.#animals;
    }

    getAnimalsByType(animalType) {
        return this.#animals.filter(({type}) => type === animalType)
    }

    getAllFoods() {
        return this.#foods;
    }

    getFoodsByType(foodType) {
        return this.#foods.filter(({type}) => type === foodType)
    }

    soundOff() {
        this.#animals.forEach(
            ({name, type, sound, energy}) => console.log(`${type} ${name} is making sound "${sound}" and has energy ${energy}`) 
        )
    }
}

class Animal extends Jungle {
    constructor(animals, foods, animalName, animalType, sound, food) {
        super(animals, foods);
        this.animalName = animalName;
        this.animalType = animalType;
        this.sound = sound;
        this.food = food;
    }

    makeSound() {
        this.changeAnimalEnegy(this.animalName, -3);

        return `${this.animalType} with name ${this.animalName} is making sound ${this.sound}.`;
    }

    eatFood() {
        this.changeAnimalEnegy(this.animalName, 5);

        return `${this.animalType} with name ${this.animalName} is eating food ${this.food}.`;
    }

    sleep() {
        this.changeAnimalEnegy(this.animalName, 10);

        return `${this.animalType} with name ${this.animalName}, is sleeping.`;
    }
}

class Tiger extends Animal {
    constructor(animals, foods, tigerName, tigerType, sound, food) {
        super(animals, foods, tigerName, tigerType, sound, food)
        this.tigerName = tigerName;
        this.tigerType = tigerType;
    }

    eatFood({ type }) {
        try {
            if (type === "grain") {
                throw new Error("I can't eat that.");
            }

            super.eatFood();
        } catch ({ message }) {
            console.error(message);
        }
    }

    sleep() {
        this.changeAnimalEnegy(this.tigerName, 5);

        return `${this.tigerType} with name ${this.tigerName}, is sleeping.`;
    }
}

class Monkey extends Animal {
    constructor(animals, foods, monkeyName, monkeyType, sound, food) {
        super(animals, foods, monkeyName, monkeyType, sound, food)
        this.monkeyName = monkeyName;
        this.monkeyType = monkeyType;
        this.sound = sound;
        this.food = food;
    }

    eatFood() {
        this.changeAnimalEnegy(this.monkeyName, 2);

        return `${this.monkeyType} with name ${this.monkeyName} is eating food ${this.food}.`;
    }

    makeSound() {
        this.changeAnimalEnegy(this.monkeyName, -4);

        return `${this.monkeyType} with name ${this.monkeyName} is making sound ${this.sound}.`;
    }

    play() {
        try {
            const currentMonkeyEnergy = this.getAnimalsByType("monkey").find(({name}) => name === this.monkeyName).energy;

            if (currentMonkeyEnergy < 8) {
                throw new Error("I'm too tired");
            }

            console.log("Oooo Oooo");
            this.changeAnimalEnegy(this.monkeyName, -8);
        } catch ({ message }) {
            console.error(message);
        }
    }
}

class Snake extends Animal {
    constructor(animals, foods, snakeName, snakeType, sound, food) {
        super(animals, foods, snakeName, snakeType, sound, food);
    }
}

class Food extends Jungle {
    constructor(animals, foods) {
        super(animals, foods);
    }
}

class Fish extends Food {
    constructor(animals, foods) {
        super(animals, foods);
    }
}

class Grain extends Food {
    constructor(animals, foods) {
        super(animals, foods);
    }
}

class Meat extends Food {
    constructor(animals, foods) {
        super(animals, foods);
    }
}

const jungle = new Jungle(animals, foods);

const animal = new Animal(animals, foods, "Tiger_2", "tiger", "Vu vu", "meat");
const tiger = new Tiger(animals, foods, "Tiger_3", "tiger", "Vu vu", "meat");
const monkey = new Monkey(animals, foods, "Monkey_3", "monkey", "Ooo Ooo", "grain");
const snake = new Snake(animals, foods, "Snake_3", "snake", "Tss Tss", "meat");

const food = new Food(animals, foods);
const fish = new Fish(animals, foods);
const grain = new Grain(animals, foods);
const meat = new Meat(animals, foods);

animal.makeSound();
jungle.soundOff();

console.log(animals);