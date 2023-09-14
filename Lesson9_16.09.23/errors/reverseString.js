function reverseString(s) {
    let existsError = false;
    let reversedString = ""

    try {
        reversedString = s.split("").reverse().join("");
    } catch (err) {
        existsError = true;
        console.log(err.message);
    }

    if (existsError) { console.log(s); }
    else console.log(reversedString);
}

reverseString("Arthur");
reverseString(1234);