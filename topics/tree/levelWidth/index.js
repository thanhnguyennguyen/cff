const levelWidth = (root) => {
    // put your code here to address the problem
    let arr = [root, null],
        result = [],
        counter = 0;
    while(arr.length > 1) {
        let node = arr.shift();
        if (node === null) {
            result.push(counter);
            counter = 0;
            arr.push(null);
        } else {
            counter++;
            arr.push(...node.children);
        }
    }
    result.push(counter);
    return result;
}
module.exports = levelWidth;
