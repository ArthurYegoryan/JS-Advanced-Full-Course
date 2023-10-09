class Users {
    #users = new Map();
    #id = 1;

    constructor(data) {
        this.data = data;
        this.data.map(obj => this.#users.set(this.#id++, obj));
    }

    addUsers(data) {
        data.map(obj => this.#users.set(this.#id++, obj));
    }

    getUserById(id) {
        return this.#users.get(id);
    }
}

const mappedUser = new Users([
    { id: 1, name: "Alice", email: "alice@example.com" }, 
    { id: 2, name: "Bob", email: "bob@example.com" },
]);

console.log(mappedUser.getUserById(1));

mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]); 
console.log(mappedUser.getUserById(3));