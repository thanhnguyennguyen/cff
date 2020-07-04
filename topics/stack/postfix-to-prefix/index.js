const Stack = require('../index.js');
const operators = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
}
const PostfixToPrefix = (formula) => {
    let stack = new Stack()
    for (let i = 0; i < formula.length; i++) {
        let c = formula[i]
        if (!operators[c]) {
            stack.push(c)
            continue
        }
        let subFormula = stack.pop()
        subFormula = stack.pop() + subFormula
        subFormula = c + subFormula
        stack.push(subFormula)

    }
    return stack.pop()
}
module.exports = PostfixToPrefix

