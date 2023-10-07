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

    getSize() {
        return this.size;
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

        console.log(result);
    }
}

const node1 = new Node(666);
const node2 = new Node(777);
const node3 = new Node(1);
const node4 = new Node(7);
const linkedList = new LinkedList()

linkedList.append(node1);
linkedList.append(node2);
linkedList.prepend(node3);
linkedList.insert(node4, 2);
linkedList.removeAt(2);
linkedList.insert(node4, 2);
linkedList.remove(node4);
console.log(linkedList.getSize());
console.log(linkedList.isEmpty());
linkedList.printList();

console.log(JSON.stringify(linkedList, null, 2));