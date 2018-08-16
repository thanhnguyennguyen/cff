

const reverseInt = (num) => {
    // put your code here to address problems
    var str = num.toString(),
        sign = 1;
    if (str[0] === '-') {
        str = str.slice(1);
        sign = -1;
    }
    debugger;
    return sign * parseInt(str.split('').reverse().join(''));
}

reverseInt(123);

module.exports = reverseInt;
