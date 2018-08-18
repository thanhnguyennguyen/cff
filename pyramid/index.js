
const pyramid = num => {
    // put your code here to address problems
    let result = [];
    for (let row = 1; row <= num; row ++) {
        let firstPart = thirdPart = new Array(num - row + 1).join(' '),
            secondPart = new Array(2*row - 1 + 1).join('#');
        result.push(firstPart + secondPart + thirdPart);
    }
    return result;
}

module.exports = pyramid;
