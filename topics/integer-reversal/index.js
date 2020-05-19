const reverseInt = (num) => {
    // put your code here to address problems
    return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
}

module.exports = reverseInt;