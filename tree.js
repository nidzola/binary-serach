let Node = require('./node');

class Tree {
    constructor() {
        this.root = null;
    }

    addValue(value) {
        let node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.root.addNode(node);
        }
    }

    traverse() {
        this.root.visit();
    }

    search(value) {
        return this.root.search(value);
    }
}

module.exports = Tree;