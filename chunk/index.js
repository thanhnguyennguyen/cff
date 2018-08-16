
const chunk = (arr, size) => {
    // put your code here to address problems
    let result = [];
    if (size < 1) return [arr];

    while(arr.length) {
        result.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return result;
}

module.exports = chunk;
