class Node {
    // put your code here to implement a link list node

     // in Javascript, null means this variable has not been set
     // null means this variable has been set to value null
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linklist {
    // put your code here to implement link list
    
    /**
     * constructor
     * @param Node node optional
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /**
     * return the head element of link list
     * @return data|null
     */
    getHead() {
        return (this.head) ? this.head.data : null;
    }

    /**
     * return the tail element of link list
     * @return data|null
     */
    getTail() {
        if (!this.head) {
            return null;
        }
        let walker = this.head;
        while(walker.next) walker = walker.next;
        return walker.data;
    }

    /**
     * return the element at index of link list
     * @param integer index
     * @return data|null
     */
    getElementAt(index) {
        if (!this.head || index >= this.size) {
            return null;
        }
        let walker = this.head,
            i = 0;
        while(i < index) {
            walker = walker.next;
            i++;
        }
        return walker.data;
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
     * @param data 
     * @return boolean
     */
    insertAtHead(data) {
        let node = new Node(data, this.head);
        this.head = node;
        this.size++;
        return true;
    }

    /**
     * insert a node to link list at tail, return true if success
     * @param data
     * @return boolean
     */
    insertAtTail(data) {
        if (!this.head) {
            this.head = new Node(data);
            this.size++;
            return true;
        }
        let walker = this.head;
        while(walker.next) walker = walker.next;
        walker.next = new Node(data, walker.next);
        this.size++;
        return true;
    }

    /**
     * insert a node to link list at head, return true if success
     * @param integer index
     * @param  data 
     * @return boolean
     */
    insertAt(index, data) {
        if (index > this.size) {
            return false;
        }
        // insert at head
        if (!this.head) {
            return this.insertAtHead(data);
        }
        let walker = this.head,
            i = 0;
        while(i < index - 1 && walker.next) {
            walker = walker.next;
            i++;
        }
        walker.next = new Node(data, walker.next);
        this.size++;
        return true;
    }

    /**
     * remove head element of link list
     * @return data|null
     */
    removeAtHead() {
        if (this.size) {
            let result = this.head.data;
            this.head = this.head.next;
            this.size--;
            return result;
        }
        return null;
    }

    /**
     * remove tail element of link list
     * @return data|null
     */
    removeAtTail() {
        if (!this.head) {
            return null;
        }
        if (this.size === 1) {
            let result = this.head.data;
            this.head = null;
            this.size--;
            return result;
        }
        let walker = this.head;
        while(walker.next.next) walker = walker.next;
        let result = walker.next.data;
        walker.next = null;
        this.size--;
        return result;
    }

    /**
     * remove  element at index of link list
     * @param integer index
     * @return data
     */
    removeAt(index) {
        if (index >= this.size) {
            return null;
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
        let result = walker.next.data;
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
        this.head = null;
        this.size = 0;
    }
}

module.exports = {Linklist, Node};
