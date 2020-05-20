const Stack = require('../index.js');
const operators = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
}
const PostfixToInfix = (formula) => {
    let result = ""
    let stack = new Stack()
    for (let i = 0 ; i < formula.length ; i++) {
        let c = formula[i]
        if (!operators[c]) {
            stack.push(c)
            continue
        }
        let subFormula = stack.pop()
        subFormula = stack.pop() + c + subFormula
        if (i !== formula.length - 1) {
            stack.push('(' + subFormula + ')')
        } else {
            stack.push(subFormula)

        }
    }
    return stack.pop()
}
module.exports = PostfixToInfix
