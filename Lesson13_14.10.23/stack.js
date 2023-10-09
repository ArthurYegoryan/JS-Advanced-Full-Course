// Implementation with array

class Stack {
    #stackStorage = [];

    push(elem) {
        this.#stackStorage.push(elem);
        
        return this;
    }

    pop() {
        return this.#stackStorage.pop();
    }

    top() {
        if(this.#stackStorage.length) {
            return this.#stackStorage[this.#stackStorage.length - 1];
        }

        return "Stack is empty!";
    }

    isEmpty() {
        if (this.#stackStorage.length) {
            return false;
        }

        return true;
    }

    getSize() {
        return this.#stackStorage.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.getSize());