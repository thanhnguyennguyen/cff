const capitalize = (str) => {
    // put your code here to address problems
    let result = [];
    str.split(' ').forEach(function(val) {
        result.push(val.slice(0, 1).toUpperCase() + val.slice(1));
    });
    return result.join(' ');
}

const capitalize2 = (str) => {
    // put your code here to address problems
    let result = '',
        capitalization = true;
    for (let char of str) {
        result += capitalization ? char.toLocaleUpperCase() : char;
        capitalization = (char === ' ');
    }
    return result;
}


module.exports = {
    capitalize,
    capitalize2
};