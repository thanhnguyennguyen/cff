const pyramid = num => {
    // put your code here to address problems
    let result = [];
    if (num < 1) {
        return result;
    }
    for (let row = 1; row <= num; row++) {
        let firstPart = new Array(num - row + 1).join(' '),
            thirdPart = firstPart,
            secondPart = new Array(2 * row - 1 + 1).join('#');
        result.push(firstPart + secondPart + thirdPart);
    }
    return result;
}

// recursive version
const pyramid2 = (num, row = 1, result = []) => {
    // put your code here to address problems
    if (num < 1) {
        return result;
    }
    if (row === num) {
        result.push(new Array(2 * row - 1 + 1).join('#'));
        return result;
    }
    result.push(
        new Array(num - row + 1).join(' ') +
        new Array(2 * row - 1 + 1).join('#') +
        new Array(num - row + 1).join(' ')
    );
    pyramid2(num, row + 1, result);

    return result;
}

module.exports = {
    pyramid,
    pyramid2
};