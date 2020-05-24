const Stack = require('../index.js');
const operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "(": 3,
    ")": 3,
}

const infixToPrefix = (formula) => {
    let result = ""
    let stack = new Stack()
    for (let i = formula.length - 1; i >= 0; i--) {
        let c = formula[i]
        if (!operators[c]) {
            result += c
            continue
        }
        if (c === '(') {
            while (!stack.isEmpty() && stack.top() !== ')') {
                result += stack.pop()
            }
            stack.pop() // pop ')'
            continue
        }
        if (stack.isEmpty() || operators[c] >= operators[stack.top()] || stack.top() === ')') {
            stack.push(c)
            continue
        }
        while (!stack.isEmpty() && operators[stack.top()] > operators[c]) {
            let p = stack.pop()
                result += p
        }
        stack.push(c)
    }
    while (!stack.isEmpty()) {
        result += stack.pop()
    }
    return result.split('').reverse().join('')
}
module.exports = infixToPrefix
