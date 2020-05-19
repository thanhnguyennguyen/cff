const getStepOutput = (step, total) => {
    return new Array(total + 1).join(' ').replace(
        new Array(step + 1).join(' '),
        new Array(step + 1).join('#')
    );
}

const steps = (num) => {
    // put your code here to address problems
    if (num < 1) {
        return [];
    }
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(getStepOutput(i + 1, num));

    }
    return result;
}

const step2Recursion = num => {
    // invalid case
    if (num < 1) {
        return [];
    }

    // // base case
    if (num === 1) {
        return [getStepOutput(num, num)];
    }

    // recursive case
    let result = steps2(num - 1);
    result.push(new Array(num + 1).join('#'));
    return result;
}
const steps2 = num => step2Recursion(num).map(element => element + new Array(num - element.length + 1).join(' '));

const steps3 = num => {
    let result = [];
    for (let row = 0; row < num; row++) {
        let str = '';
        for (let column = 0; column < num; column++) {
            str += (column <= row) ? '#' : ' ';
        }
        result.push(str);
    }
    return result;
}

const steps4 = num => {
    let result = [];
    for (let row = 0; row < num; row++) {
        result.push(
            new Array(row + 1 + 1).join('#') + new Array(num - row).join(' ')
        );
    }
    // row + 1: re-index row from 1 to num
    // plus more 1 because we use 'join', if we want to join 2 characters, we need 1 join-character(#)
    // thus, to have (row + 1) # characters, we need to join an array that have (row +2) empty items
    // similar for space, we should have [num - (row + 1) + 1] = (row -num) spaces
    return result;
}
module.exports = {
    steps,
    steps2,
    steps3,
    steps4
};