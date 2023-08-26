function isPalindrome(string) {
    if (string.length === 0) {
        return "Please input any text!";
    }
    if (string.length === 1) {
        return true;
    }
    if (string.length === 2) {
        return string[0] === string[string.length - 1];
    }

    return isPalindrome(string.slice(1, string.length - 1));
}

console.log(isPalindrome("racecar"));