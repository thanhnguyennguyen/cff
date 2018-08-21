const {Linklist, Node} = require('../index.js');
// put your code here

const isCircular = (list) => {
    if (!list.head) {
        return false;
    }
    let tail = list.getElementAt(list.getSize() - 1);
    return (tail.next !== null);
}

module.exports = isCircular;

