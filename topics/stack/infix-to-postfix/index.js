const Stack = require('../index.js');
const operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "(": 3,
    ")": 4,
}
const infixToPostFix = (formula) => {
    let result = ""
    let stack = new Stack()
    for (let i = 0; i < formula.length; i++) {
        let c = formula[i]
        if (!operators[c]) {
            result += c
            continue
        }
        if (c == '(') {
            stack.push(c)
            continue
        }
        if (c == ')') {
            while (stack.top() != '(') {
                c = stack.pop()
                result += c
            }
            stack.pop() // pop '('
            continue
        }
        let top = stack.top()
        if (stack.isEmpty() || top == '(' || operators[c] > operators[top]) {
            stack.push(c)
        } else {
            while (!stack.isEmpty() && operators[top] >= operators[c]) {
                result += stack.pop()
            }
            stack.push(c)
        }
    }
    while (!stack.isEmpty()) {
        result += stack.pop()
    }
    return result
}
module.exports = infixToPostFix
