class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addNode(node) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }

    visit() {
        if (this.left !== null) {
            this.left.visit();
        }
        console.log(this.value);
        if (this.right !== null) {
            this.right.visit();
        }
    }

    search(value) {
        if (this.value === value) {
            return this.value;
        } else if (value < this.value && this.left !== null) {
            this.left.search(value);
        } else if (value > this.value && this.right !== null) {
            this.right.search(value);
        }
    }
}

module.exports = Node;