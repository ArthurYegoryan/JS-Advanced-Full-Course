class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        if (!this.head) {
            this.head = data;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = data;
        }

        this.size += 1;

        return this;
    }

    prepend(data) {
        if (!this.head) {
            this.head = data;
        } else {
            const prevHead = this.head;
            this.head = data;
            data.next = prevHead;
        }

        this.size += 1;

        return this;
    }

    insert(data, index) {
        if (index < 0 || index > this.size) {
            console.error("Invalid index for insert!");
            return false;
        }
        if (index === 0) return this.prepend(data);
        if (index === this.size) return this.append(data);

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }

        data.next = currentNode.next;
        currentNode.next = data;
        this.size += 1;

        return this;
    }

    removeAt(index) {
        if (index < 0 || index > this.size - 1) {
            console.error("Invalid index for insert!");
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            return this;
        }

        let currentNode = this.head;
        let counter = 0;

        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }

        currentNode.next = currentNode.next.next;
        this.size--;

        return this;
    }

    remove(data) {
        let currentNode = this.head;
        let currentNodePrev = null;
        let counter = 1;

        while(counter <= this.size) {
            if (currentNode === data) {
                break;
            }

            currentNodePrev = currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        if (counter > this.size) return false;

        currentNodePrev.next = currentNode.next;
        this.size--;

        return this;
    }

    reverse() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode.next) {
            nodes.unshift(currentNode);
            currentNode = currentNode.next;
        }
        nodes.unshift(currentNode);

        this.head = nodes[0];

        let index = 0;

        while (index !== this.size) {
            nodes[index].next = nodes[index + 1];
            index++;
        }
        nodes[index - 1].next = null;

        return this;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.head.next = null;
        this.head = null;
        this.size = 0;

        return this;
    }

    isEmpty() {
        if (!this.size) return false;

        return true;
    }

    printList() {
        if (!this.size) {
            console.log("Your list is empty!");
            return;
        }

        let result = "";

        let counter = 1;
        let currentNode = this.head;

        while (counter <= this.size) {
            result += currentNode["data"] + " ";
            currentNode = currentNode.next;
            counter++;
        }

        console.log(result.trim());
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node0 = new Node(0);
const node3 = new Node(3);
const node666 = new Node(666);

const list = new LinkedList();
list.append(node1);
list.append(node2);
list.prepend(node0);
list.insert(node3, 3);
list.printList();
console.log("Size:", list.getSize());
list.remove(2); 
list.removeAt(2);
list.append(node666);
list.printList();
console.log("Size:", list.getSize());

list.printList();
list.reverse();
list.printList();

list.clear();
list.printList();