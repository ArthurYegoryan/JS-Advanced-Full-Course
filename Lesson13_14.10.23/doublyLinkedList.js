// TODO
// reverse, getSize, clear, isEmpty, printList methods

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        if (!this.tail) {
            this.head = data;
            this.tail = data;
        } else {
            const prevTail = this.tail;
            prevTail.next = data;
            this.tail = data;
            this.tail.prev = prevTail;
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
            prevHead.prev = data;
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
        data.prev = currentNode;
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

        if (!currentNode.next.next) {
            currentNode.next = null;
            this.tail = currentNode;
        } else {
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
        }
        
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
        currentNode.next.prev = currentNodePrev;
        this.size--;

        return this;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node0 = new Node(0);
const node3 = new Node(3);
const node666 = new Node(666);

const list = new DoubleLinkedList();
list.append(node1);
list.append(node2);
list.prepend(node0);
list.insert(node3, 2);
// list.printList();
// console.log("Size:", list.getSize());
list.remove(node1);
list.removeAt(2);
// list.append(node666);
// list.printList();
// console.log("Size:", list.getSize());

// list.printList();
// list.reverse();
// list.printList();

// list.clear();
// list.printList();

console.log(list);