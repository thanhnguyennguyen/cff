
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

module.exports = {steps, steps2};