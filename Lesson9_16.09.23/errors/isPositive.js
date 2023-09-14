function isPositive(a) {
    if (a > 0) { return "YES"; }
    
    try {
        if (a === 0) { 
            throw new Error("Zero Error");
        }
    }
    catch (err) { return err.message; }

    try {
        if (a < 0) { 
            throw new Error("Negative Error");
        }
    }
    catch (err) { return err.message; }
}

console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-5));