class Node {
    // put your code here to address problems
    constructor(data = null) {
        this.data = data;
        this.children = [];
    }

    /**
     * add data as a new child node
     * @param data 
     */
    add(data) {
        this.children.push(new Node(data));
    }

    /**
     * remove data from children list
     * @param data 
     */
    remove(data) {
        this.children = this.children.filter(e => {
            return JSON.stringify(e.data) !== JSON.stringify(data)
        });
    }
}

class Tree {
    // put your code here to address problems
    constructor() {
        this.root = null;
    }
    /**
     * breadth first traveral
     * @param fn : a function
     */
    BFS(fn) {
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            queue.push(...node.children);
            fn(node);
        }
    }

    /**
     * depth first traversal
     * @param fn : a function
     */
    DFS(fn) {
        let stack = [this.root];
        while (stack.length) {
            let node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = {
    Node,
    Tree
};