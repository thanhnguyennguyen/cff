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
    }
    /**
     * return the head element of link list
     * @return Node|undefined
     */
    getHead() {

    }

    /**
     * return the tail element of link list
     * @return Node|undefined
     */
    getTail() {
        
    }

    /**
     * return the element at index of link list
     * @param integer index
     * @return Node|undefined
     */
    getElementAt(index) {

    }

    /**
     * return the size of link list
     * @return integer
     */
    getSize() {

    }

    /**
     * return if link list is empty
     * @return boolean
     */
    isEmpty() {

    }

    /**
     * insert a node to link list at head, return true if success
     * @param Node node
     * @return boolean
     */
    insertAtHead(node) {

    }

    /**
     * insert a node to link list at tail, return true if success
     * @param Node node
     * @return boolean
     */
    insertAtTail(node) {

    }

    /**
     * insert a node to link list at head, return true if success
     * @param integer index
     * @param  Node node
     * @return boolean
     */
    insertAt(index, node) {

    }

    /**
     * remove head element of link list
     * @return Node|undefine
     */
    removeAtHead() {

    }

    /**
     * remove tail element of link list
     * @return Node|undefine
     */
    removeAtTail() {

    }

    /**
     * remove  element at index of link list
     * @return Node|undefine
     */
    removeAt() {

    }

    /**
     * visit all elements of link list from head to tail
     * @return array
     */
    traverse() {

    }
}

module.exports = {Linklist, Node};
