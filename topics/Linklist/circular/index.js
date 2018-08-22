const {Linklist, Node} = require('../index.js');
// put your code here

const isCircular1 = (list) => {
    if (!list.head) {
        return false;
    }
    let tail = list.getElementAt(list.getSize() - 1);
    return (tail.next !== null);
}

const isCircular2 = (list) => {
    if (!list.head) {
        return false;
    }
    let walker1 = list.head,
        walker2 = list.head;
    while(walker2 && walker2.next) {
        walker1 = walker1.next;
        walker2 = walker2.next.next;
        if (walker1 === walker2) {
            return true;
        }
    }
    return false;
}
module.exports = {isCircular1, isCircular2};

