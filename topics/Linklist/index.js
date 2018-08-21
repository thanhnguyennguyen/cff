class Node {
    // put your code here to implement a link list node
    constructor(data, node) {
        this.data = data;
        this.next = node;
    }
}

class Linklist {
    // put your code here to implement link list
    
    /**
     * constructor
     * @param Node node optional
     */
    constructor(node) {
        this.head = node;
        this.size = node ? 1 : 0;
    }
    /**
     * return the head element of link list
     * @return Node|undefined
     */
    getHead() {
        return this.head;
    }

    /**
     * return the tail element of link list
     * @return Node|undefined
     */
    getTail() {
        if (!this.head) {
            return undefined;
        }
        let walker = this.head;
        while(walker.next) walker = walker.next;
        return walker;
    }

    /**
     * return the element at index of link list
     * @param integer index
     * @return Node|undefined
     */
    getElementAt(index) {
        if (!this.head || index >= this.size) {
            return undefined;
        }
        let walker = this.head,
            i = 0;
        while(i < index) {
            walker = walker.next;
            i++;
        }
        return walker;
    }

    /**
     * return the size of link list
     * @return integer
     */
    getSize() {
        return this.size;
    }

    /**
     * return if link list is empty
     * @return boolean
     */
    isEmpty() {
        return (this.size === 0);
    }

    /**
     * insert a node to link list at head, return true if success
     * @param Node node
     * @return boolean
     */
    insertAtHead(node) {
        node.next = this.head;
        this.head = node;
        this.size++;
        return true;
    }

    /**
     * insert a node to link list at tail, return true if success
     * @param Node node
     * @return boolean
     */
    insertAtTail(node) {
        if (!this.head) {
            this.head = node;
            this.size++;
            return true;
        }
        let walker = this.head;
        while(walker.next) walker = walker.next;
        node.next = walker.next;
        walker.next = node;
        this.size++;
        return true;
    }

    /**
     * insert a node to link list at head, return true if success
     * @param integer index
     * @param  Node node
     * @return boolean
     */
    insertAt(index, node) {
        if (index > this.size) {
            return false;
        }
        // insert at head
        if (!this.head) {
            return this.insertAtHead(node);
        }
        let walker = this.head,
            i = 0;
        while(i < index - 1 && walker.next) {
            walker = walker.next;
            i++;
        }
        node.next = walker.next;
        walker.next = node;
        this.size++;
        return true;
    }

    /**
     * remove head element of link list
     * @return Node|undefine
     */
    removeAtHead() {
        if (this.size) {
            let result = new Node();
            result.data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return result;
        }
        return undefined;
    }

    /**
     * remove tail element of link list
     * @return Node|undefine
     */
    removeAtTail() {
        if (!this.head) {
            return undefined;
        }
        if (this.size === 1) {
            let result = new Node(this.head.data);
            this.head = undefined;
            this.size--;
            return result;
        }
        let walker = this.head;
        while(walker.next.next) walker = walker.next;
        let result = new Node(walker.next.data);
        walker.next = undefined;
        this.size--;
        return result;
    }

    /**
     * remove  element at index of link list
     * @param integer index
     * @return Node|undefine
     */
    removeAt(index) {
        if (index >= this.size) {
            return undefined;
        }
        // remove at head
        if (index === 0) {
            return this.removeAtHead();
        }
        if (index === (this.size - 1)) {
            return this.removeAtTail();
        }
        let walker = this.head,
            i = 0;
        while(i < index - 1 && walker.next) {
            walker = walker.next;
            i++;
        }
        let result = new Node(walker.next.data);
        walker.next = walker.next.next;
        this.size--;
        return result;
    }

    /**
     * visit all elements of link list from head to tail
     * @return array
     */
    traverse() {
        if (this.size) {
            let walker = this.head,
                result = [];
            while(walker.next) {
                result.push(walker.data);
                walker = walker.next;
            }
            result.push(walker.data);
            return result;
        }
        return [];
    }

    /**
     * clear link list
     */
    clear() {
        this.head = undefined;
        this.size = 0;
    }
}

module.exports = {Linklist, Node};
