
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


const chunk2 = (arr, size) => {
    // put your code here to address problems
    let result = [];
    if (size < 1) return [arr];

    let currentChunk = [];
    for (element of arr) {
        currentChunk.push(element);
        if (currentChunk.length == size) {
            result.push(currentChunk);
            // reset current chunk
            currentChunk = [];
        }
    }

    // put the last chunk to result
    if (currentChunk.length) {
        result.push(currentChunk);
    }
    return result;
}

module.exports = { chunk, chunk2};
