function reverseString(s) {
    try {
        if (typeof s !== "string") {
            throw new Error("s.split is not a function");
        }

        s = s.split("").reverse().join("");
    } catch (err) { 
        console.error(err.message);
        return;
    } finally {
        console.log(s);
    }    
}

reverseString("Arthur");
reverseString(5);