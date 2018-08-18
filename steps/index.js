
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

module.exports = steps;
