class Account {
    #id = Date.now().toString(32);
    #name = null;
    #accountBalance = 0;
    #balancePassword = null;

    constructor(accountName, startBalance) {
        try {
            if (typeof accountName === "string") {
                this.#name = accountName;
            } else {
                throw new Error(`Invalid account name(${accountName})!`);
            }
        } catch (err) {
            console.error(err.message);
        }
        this.#accountBalance = startBalance;
    }

    get balance() { 
        if (this.#balancePassword === null) {
            return this.#accountBalance;
        }

        return "Your balance is under password!";
    }
    set balance(text) { this.#balancePassword = text; }

    get id() { return this.#id; }

    credit(amount) {
        this.#accountBalance += amount;
    }

    debit(amount) {
        this.#accountBalance -= amount;
    }

    transferTo(otherAccount, amount) {
        this.debit(amount);
        otherAccount.credit(amount);
    }

    static identifyAccounts(firstAccount, secondAccount) {
        return firstAccount.id === secondAccount.id;
    }

    submitBalance(password) {
        if(password === this.#balancePassword) {
            return this.balance;
        }

        return "Invalid balance password!";
    }
}

const saving = new Account("saving", 1000);
// const saving1 = new Account(20, 1000);
const current = new Account("current", 8000);

saving.credit(5000); // 6000
console.log(saving.balance)
saving.debit(1000); // 5000
saving.debit(2000); // 3000
saving.transferTo(current, 1000); // saving - 2000, current - 9000
console.log(saving.balance); // 2000
console.log(current.balance); // 9000
const res = Account.identifyAccounts(current, saving); // false

console.log(saving.balance); // 2000
saving.balance = "hello"; // saving balance pass - "hello"
saving.submitBalance("hello"); // 2000
console.log(saving);