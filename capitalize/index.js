

const capitalize = (str) => {
    // put your code here to address problems
    let result = [];
    str.split(' ').forEach(function(val) {
        result.push(val.slice(0, 1).toUpperCase() + val.slice(1));
    });
    return result.join(' ');
}

module.exports = capitalize;
