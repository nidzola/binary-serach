let Tree = require('./tree');

let tree = new Tree();
for (let i = 0; i < 10; i++) {
    tree.addValue(random(1, 100));
}
tree.traverse();

let valueToFind = 50;

let found = tree.search(valueToFind);
if (found) {
    console.log('FOUND: ' + found);
} else {
    console.log('Unable to find: ' + valueToFind);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}