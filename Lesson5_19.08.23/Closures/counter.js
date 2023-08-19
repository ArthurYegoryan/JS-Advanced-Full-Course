function createCounter() {
    let number = 1;
    return () => number++;
}

const counter = createCounter();

console.log(counter());
console.log(counter());