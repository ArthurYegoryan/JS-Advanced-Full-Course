class Shiritori {
    #game_over = false;
    words = [];

    play(word) {
        const itemToAdd = word.toLowerCase().trim();

        if (this.words.length === 0 || this.words[this.words.length - 1].at(-1) === itemToAdd[0]) {
            if (!this.words.includes(word)) {
                this.words.push(itemToAdd);

                return this.words;
            }
        }

        this.#game_over = true;

        return "game over";
    }

    restart() {
        this.words.length = 0;
        this.#game_over = false;

        return "game restarted";
    }
}

const myShiritori = new Shiritori();
console.log(myShiritori.play("apple"));
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));

console.log(myShiritori.words);

console.log(myShiritori.restart());
console.log(myShiritori.words);

console.log(myShiritori.play("hostess"));
console.log(myShiritori.play("stash"));
console.log(myShiritori.play("hostess"));