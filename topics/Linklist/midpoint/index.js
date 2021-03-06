const midpoint = (list) => {
    if (!list.head) {
        return null;
    }

    let walker1  = list.head,
        walker2 = list.head;
    while(walker2 && walker2.next) {
        if (walker2.next.next) {
            walker1 = walker1.next;
            walker2 = walker2.next.next;
        } else {
            walker2 = null;
        }
    }
    return walker1;
}
module.exports = midpoint;
