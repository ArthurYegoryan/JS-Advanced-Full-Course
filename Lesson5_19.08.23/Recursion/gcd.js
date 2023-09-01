function gcd(firstNum, secondNum) {
    if (firstNum === secondNum) {
        return firstNum;
    } 
    
    const max = Math.max(firstNum, secondNum);
    const min = Math.min(firstNum, secondNum);

    if (max % min === 0) {
        return min;
    }

    return gcd(min, max % min);
}

console.log(gcd(48, 18));