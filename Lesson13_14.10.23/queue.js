class Queue {
    #queueStorage = [];

    enqueue(element) {
        this.#queueStorage.push(element);

        return this;
    }

    dequeue() {
        return this.#queueStorage.shift();
    }

    front() {
        if (this.#queueStorage.length) return this.#queueStorage[0];
        
        return "Queue is empty!";
    }

    isEmpty() {
        if (this.#queueStorage.length) return false;

        return true;
    }

    size() {
        return this.#queueStorage.length;
    }

    print() {
        if (!this.#queueStorage.length) console.log("Queue is empty!");

        console.log(this.#queueStorage.reduce((resultText, elem) => resultText + " " + elem));
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log("Front element: " + queue.front());

queue.dequeue();
queue.print();

console.log("Queue size: " + queue.size());