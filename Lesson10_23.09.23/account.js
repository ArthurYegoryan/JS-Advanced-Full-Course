class Account {
    #id = Math.random().toString(36).substring(2, 9);
    #name = null;
    #accountBalance = 0;
    #balancePassword = null;

    constructor(accountName, startBalance) {
        if (typeof accountName === "string") this.#name = accountName;
        else throw new Error(`Invalid account name(${accountName})!`).message;
        
        if (startBalance >= 0 && typeof startBalance === "number" && !Number.isNaN(startBalance)) {
            this.#accountBalance = startBalance;
        }
        else throw new Error(`Balance can't be negative, or wrong balance format!`).message;
    }

    get balance() { 
        try {
            if (this.#balancePassword === null) {
                return this.#accountBalance;
            }

            throw new Error("Your balance is under password!");
        } catch (err) {
            return err.message;
        }
    }
    set balance(text = null) { this.#balancePassword = text; }

    get id() { return this.#id; }
    get name() { return this.#name; }

    credit(amount) {
        this.#accountBalance += amount;
    }

    debit(amount) {
        try {
            if (amount > this.#accountBalance) {
                throw new Error("Amount for debit is larger than your balance!");
            }
            this.#accountBalance -= amount;
        } catch (err) {
            console.error(err.message);
        }
    }

    transferTo(otherAccount, amount) {
        try {
            if (amount > this.#accountBalance) {
                throw new Error("You haven't enough balance in your account for transfer!");
            }

            this.debit(amount);
            otherAccount.credit(amount);
        } catch (err) {
            console.error(err.message);
        }
    }

    static identifyAccounts(firstAccount, secondAccount) {
        return firstAccount.id === secondAccount.id;
    }

    submitBalance(password) {
        try {
            if(password === this.#balancePassword) {
                return this.balance;
            }

            throw new Error("Invalid balance password!");
        } catch (err) {
            return err.message;
        }
    }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

saving.credit(5000); // 6000
console.log(saving.balance);

saving.debit(1000); // 5000
console.log(saving.balance);

saving.debit(2000); // 3000
console.log(saving.balance);

saving.transferTo(current, 1000); // saving - 2000, current - 9000
console.log(saving.balance); // 2000
console.log(current.balance); // 9000

const res = Account.identifyAccounts(current, saving); // false
console.log("Current id = saving id: " + res);

console.log(saving.balance); // 2000

saving.balance = "hello"; // saving balance pass - "hello"
saving.submitBalance("hello"); // 2000
console.log(saving);