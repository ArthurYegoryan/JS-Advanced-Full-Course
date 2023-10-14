// TODO
// delete(data) method
// printTree() method

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = data;
            return this;
        }

        let currentNode = this.root;

        function insertNode(data, currentNode) {
            if (data["data"] <= currentNode["data"]) {
                if (!currentNode.left) {
                    currentNode.left = data;
                    return this;
                }

                insertNode(data, currentNode.left);
            } else {
                if (!currentNode.right) {
                    currentNode.right = data;
                    return this;
                }

                insertNode(data, currentNode.right)
            }
        }

        insertNode(data, currentNode);

        return this;
    }

    search(data) {
        if (!this.root) return false;

        let currentNode = this.root;
        let isFound = false;

        function searchNode(data, currentNode) {
            if (currentNode.data === data.data) {
                isFound = true;
                return true;
            }
        
            if (currentNode.left) searchNode(data, currentNode.left);
            if (currentNode.right) searchNode(data, currentNode.right);            
        }

        searchNode(data, currentNode);

        return isFound;
    }
}

const node1 = new Node(8);
const node2 = new Node(12);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(4);
const node6 = new Node(7);

const bst = new BinarySearchTree();

bst.insert(node1);
bst.insert(node2);
bst.insert(node3);
bst.insert(node4);
bst.insert(node5);

console.log(JSON.stringify(bst, null, 2));

console.log(bst.search(node4));
console.log(bst.search(node6));