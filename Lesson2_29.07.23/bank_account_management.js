const bankAccount = { 
    accountNumber: "123456789", 
    balance: 1000, 
    accountHolder: "John Doe", 
};

const amount = 500;
const operationType = "deposit";

function updateBalance(amount, operationType) {
    if (operationType === "deposit") {
        if (amount <= 0) {
            return "Invalid deposit amount. Please deposit a positive amount.";
        }
    }
}