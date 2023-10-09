// Implementation with array

// class Stack {
//     #stackStorage = [];

//     push(elem) {
//         this.#stackStorage.push(elem);
        
//         return this;
//     }

//     pop() {
//         return this.#stackStorage.pop();
//     }

//     top() {
//         if(this.#stackStorage.length) {
//             return this.#stackStorage[this.#stackStorage.length - 1];
//         }

//         return "Stack is empty!";
//     }

//     isEmpty() {
//         if (this.#stackStorage.length) {
//             return false;
//         }

//         return true;
//     }

//     getSize() {
//         return this.#stackStorage.length;
//     }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.isEmpty());
// console.log(stack.getSize());


// Implementation with Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        if (!this.tail) {
            this.head = data;
            this.tail = data;
        } else {
            this.tail.next = data;
            this.tail = data;
        }

        this.size += 1;

        return this;
    }

    pop() {
        if (!this.tail) {
            return "Stack is empty!";
        }

        let currentNode = this.head;

        while(currentNode.next.next) {
            currentNode = currentNode.next;
        }

        const prevTail = currentNode.next;
        currentNode.next = null;
        this.tail = currentNode;

        this.size -= 1;

        return prevTail["data"];
    }

    top() {
        return this.tail["data"];
    }

    isEmpty() {
        if (this.size) {
            return false;
        }

        return true;
    }

    getSize() {
        return this.size;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

const stack = new Stack();

stack.push(node1);
stack.push(node2);
stack.push(node3);

console.log(stack.pop());
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.getSize());